// The redux users reducer manages the users section of the application
// state which is used by the HomePage to display a list of users and enable deleting of users.

import {userConstants} from '../constants/user.constatns';

export const users = (state = {}, action) => {
    switch (action.type) {
        case userConstants.GETALL_REQUEST:
            return {
                loading: true,
            };
        case userConstants.GETALL_SUCCESS:
            return {
                items: action.users,
                loading: false,
            };
        case userConstants.GETALL_FAILURE:
            return {
                error: action.error,
                loading: false,
            };
        case userConstants.DELETE_REQUEST:
        // add 'deleting:true' property to user being deleted
            return {
                ...state,
                items: state.items.map((user) => {
                    return (
                        user.id === action.id
                            ? {
                                ...user, deleting: true,
                            }
                            : user
                    );
                }),
            };
        case userConstants.DELETE_SUCCESS:
        // remove deleted user from state
            return {
                items: state.items.filter((user) => user.id !== action.id),
            };
        case userConstants.DELETE_FAILURE:
        // remove 'deleting:true' property and add 'deleteError:[error]' property to user
            return {
                ...state,
                items: state.items.map((user) => {
                    if (user.id === action.id) {
                    // make copy of user without 'deleting:true' property
                        const {
                        // eslint-disable-next-line no-unused-vars
                            deleting, ...userCopy
                        } = user;
                        // return copy of user with 'deleteError:[error]' property
                        return {
                            ...userCopy, deleteError: action.error,
                        };
                    }

                    return user;
                }),
            };
        default:
            return state;
    }
};
