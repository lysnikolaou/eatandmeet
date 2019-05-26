/**
 * https://jasonwatmore.com/post/2017/09/16/react-redux-user-registration-and-login-tutorial-example
 * Contains Redux action creators for actions related to users.
 * Public action creators are exposed via the userActions object at the top of the file and function implementations are located below,
 * I like this structure because you can quickly see all of the actions that are available.
 * Most of the actions for users are async actions that are made up of multiple sub actions,
 * this is because they have to make an http request and wait for the response before completing.
 * Async actions typically dispatch a request action before performing an async task (e.g. an http request),
 * and then dispatch a success or error action based on the result of the async task.
 *
 * For example the login() action creator performs the following steps:
 * 1. dispatches a LOGIN_REQUEST action with dispatch(request({ username }));
 * 2. calls the async task userService.login(username, password)
 * 3. dispatches a LOGIN_SUCCESS with dispatch(success(user));
 * if login was successful, or dispatches a LOGIN_FAILURE action with dispatch(failure(error)); if login failed
 */

import { userConstants } from '../constants/user.constatns';
import { userService } from '../services/user.service';
import { alertActions } from '../actions/alert.actions';
import { history } from '../helpers/history';

export const userActions = {
    login,
    logout,
    register,
    getAll,
    delete: _delete
};

// Login Function
function login(username, password) {
    return dispatch => {
        dispatch(request({username}));

        userService.login(username, password)
            .then(
                user => {
                    dispatch(success(user));
                    history.push('/');
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function request(user) { return { type: userConstants.LOGIN_REQUEST, user} }
    function success(user) { return { type: userConstants.LOGIN_SUCCESS, user} }
    function failure(error) { return { type: userConstants.LOGIN_FAILURE, error} }
}

//Logout Function
function logout() {
    userService.logout();
    return { type: userConstants.LOGOUT}
}

// Register
function register(user) {
    return dispatch => {
        dispatch(request(user));

        userService.register(user)
            .then(
                user => {
                    dispatch(success());
                    history.push('/login');
                    dispatch(alertActions.success('Registration successful'));
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function request(user) { return { type: userConstants.REGISTER_REQUEST, user } }
    function success(user) { return { type: userConstants.REGISTER_SUCCESS, user } }
    function failure(error) { return { type: userConstants.REGISTER_FAILURE, error } }
}

function getAll() {
    return dispatch => {
        dispatch(request());

        userService.getAll()
            .then(
                users => dispatch(success(users)),
                error => dispatch(failure(error.toString()))
            );
    };

    function request() { return { type: userConstants.GETALL_REQUEST } }
    function success(users) { return { type: userConstants.GETALL_SUCCESS, users } }
    function failure(error) { return { type: userConstants.GETALL_FAILURE, error } }
}

// prefixed function name with underscore because delete is a reserved word in javascript
function _delete(id) {
    return dispatch => {
        dispatch(request(id));

        userService.delete(id)
            .then(
                user => dispatch(success(id)),
                error => dispatch(failure(id, error.toString()))
            );
    };

    function request(id) { return { type: userConstants.DELETE_REQUEST, id } }
    function success(id) { return { type: userConstants.DELETE_SUCCESS, id } }
    function failure(id, error) { return { type: userConstants.DELETE_FAILURE, id, error } }
}



