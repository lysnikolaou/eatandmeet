/**
 * https://jasonwatmore.com/post/2017/09/16/react-redux-user-registration-and-login-tutorial-example
 * Contains Redux action creators for actions related to alerts / toaster notifications in the application.
 * For example to display a success alert message with the text 'Registration Successful'
 * you can call dispatch(alertActions.success('Registration successful'));.
 */

import {alertConstants} from '../constants/alert.constants';

const success = (message) => {
    return {
        'type': alertConstants.SUCCESS, message,
    };
};

const error = (message) => {
    return {
        'type': alertConstants.ERROR, message,
    };
};

const clear = () => {
    return {'type': alertConstants.CLEAR};
};

export const alertActions = {
    success,
    error,
    clear,
};
