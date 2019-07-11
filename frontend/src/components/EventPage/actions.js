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
