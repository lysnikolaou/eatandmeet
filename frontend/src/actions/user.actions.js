/**
 * https://jasonwatmore.com/post/2017/09/16/react-redux-user-registration-and-login-tutorial-example
 * Contains Redux action creators for actions related to users.
 * Public action creators are exposed via the userActions object
 * at the top of the file and function implementations are located below,
 * I like this structure because you can quickly see all of the actions that are available.
 * Most of the actions for users are async actions that are made up of multiple sub actions,
 * this is because they have to make an http request and wait for the response before completing.
 * Async actions typically dispatch a request action before performing an async task (e.g. an http request),
 * and then dispatch a success or error action based on the result of the async task.
 *
 * For example the login() action creator performs the following steps:
 * 1. dispatches a LOGIN_REQUEST action with dispatch(request({ email }));
 * 2. calls the async task userService.login(email, password)
 * 3. dispatches a LOGIN_SUCCESS with dispatch(success(user));
 * if login was successful, or dispatches a LOGIN_FAILURE action with dispatch(failure(error)); if login failed
 */

import {userConstants} from '../constants/user.constatns';
import {userService} from '../services/user.service';
import {alertActions} from '../actions/alert.actions';
import {history} from '../helpers/history';

import * as paths from '../features/entrance/paths';

// Login Function
const login = (email, password) => {
    const request = (user) => {
        return {
            type: userConstants.LOGIN_REQUEST,
            user,
        };
    };

    const success = (user) => {
        return {
            type: userConstants.LOGIN_SUCCESS,
            user,
        };
    };

    const failure = (error) => {
        return {
            type: userConstants.LOGIN_FAILURE,
            error,
        };
    };

    return (dispatch) => {
        dispatch(request({email}));

        userService.login(email, password)
            .then(
                (user) => {
                    dispatch(success(user));
                    history.push(paths.FEED);
                },
                (error) => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };
};

// Logout Function
const logout = () => {
    userService.logout();
    return {type: userConstants.LOGOUT};
};

// Register
const register = (user) => {
    const request = () => {
        return {
            type: userConstants.REGISTER_REQUEST, user,
        };
    };

    const success = () => {
        return {
            type: userConstants.REGISTER_SUCCESS, user,
        };
    };

    const failure = (error) => {
        return {
            type: userConstants.REGISTER_FAILURE, error,
        };
    };

    return (dispatch) => {
        dispatch(request(user));

        userService.register(user)
            .then(
                () => {
                    dispatch(success());
                    dispatch(alertActions.success('Registration successful'));
                    history.push('/welcome/login');
                },
                (error) => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };
};

const getAll = () => {
    const request = () => { return {type: userConstants.GETALL_REQUEST}; };

    const success = (users) => {
        return {
            type: userConstants.GETALL_SUCCESS, users,
        };
    };

    const failure = (error) => {
        return {
            type: userConstants.GETALL_FAILURE, error,
        };
    };

    return (dispatch) => {
        dispatch(request());

        userService.getAll()
            .then(
                (users) => dispatch(success(users)),
                (error) => dispatch(failure(error.toString()))
            );
    };
};

// prefixed function name with underscore because delete is a reserved word in javascript
const _delete = (id) => {
    const request = () => {
        return {
            type: userConstants.DELETE_REQUEST, id,
        };
    };
    const success = () => {
        return {
            type: userConstants.DELETE_SUCCESS, id,
        };
    };
    const failure = (error) => {
        return {
            type: userConstants.DELETE_FAILURE, id, error,
        };
    };

    return (dispatch) => {
        dispatch(request(id));

        userService.delete(id)
            .then(
                () => dispatch(success(id)),
                (error) => dispatch(failure(id, error.toString()))
            );
    };
};

export const userActions = {
    login,
    logout,
    register,
    getAll,
    delete: _delete,
};
