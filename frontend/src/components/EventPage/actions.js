import * as actionType from './action-types';
import {eventService} from '../../services/event.service';

// export const fetchEventBegin = () => ({
//     type: actionType.FETCH_EVENT_BEGIN,
// });
//
// export const fetchEventSuccess = (products) => ({
//     type: actionType.FETCH_EVENT_SUCCESS,
//     payload: {products},
// });
//
// export const fetchEventFailure = (error) => ({
//     type: actionType.FETCH_EVENT_FAILURE,
//     payload: {error},
// });

// // Handle HTTP errors since fetch won't.
// // export const handleErrors = (response) => {
// //     if (!response.ok) {
// //         throw Error(response.statusText);
// //     }
// //     return response;
// // };

export const fetchEvent = (id) => {
    const request = () => { return {type: actionType.FETCH_EVENT}; };

    const success = (event) => {
        return {
            type: actionType.FETCH_EVENT_SUCCESS,
            event,
        };
    };

    const failure = (error) => {
        return {
            type: actionType.FETCH_EVENT_FAILURE, error,
        };
    };

    return (dispatch) => {
        dispatch(request());
        eventService.getById(id)
            .then(
                (event) => dispatch(success(event)),
                (error) => dispatch(failure(error.toString()))
            );
    };
};

export const toggleGoing = () => ({
    type: actionType.TOGGLE_GOING,
});

export const joinEvent = (event, userId) => {
    console.log(event);
    const success = () => {
        return {
            type: actionType.JOIN_EVENT,
            event,
        };
    };
    const failure = (error) => {
        return {
            type: actionType.JOIN_EVENT_FAILURE, error,
        };
    };

    event.event_members.push(userId);
    return (dispatch) => {
        eventService.update(event)
            .then(
                () => {
                    dispatch(success(event));
                    window.location.reload();
                },
                (error) => dispatch(failure(error.toString()))
            );
    };
};

export const leaveEvent = (event, userId) => {
    const success = () => {
        return {
            type: actionType.LEAVE_EVENT,
            event,
        };
    };
    const failure = (error) => {
        return {
            type: actionType.LEAVE_EVENT_FAILURE, error,
        };
    };

    event.event_members.splice(event.event_members.indexOf(userId), 1);
    return (dispatch) => {
        eventService.update(event)
            .then(
                () => {
                    dispatch(success(event));
                    window.location.reload();
                },
                (error) => dispatch(failure(error.toString()))
            );
    };
};
