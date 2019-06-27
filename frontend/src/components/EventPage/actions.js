import * as actionType from './action-types';
import {events} from '../../fakedata/feed';

export const fetchEventBegin = () => ({
    type: actionType.FETCH_EVENT_BEGIN,
});

export const fetchEventSuccess = (products) => ({
    type: actionType.FETCH_EVENT_SUCCESS,
    payload: {products},
});

export const fetchEventFailure = (error) => ({
    type: actionType.FETCH_EVENT_FAILURE,
    payload: {error},
});

// Handle HTTP errors since fetch won't.
export const handleErrors = (response) => {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
};

export const fetchEvent = (id) => {
    // todo remove the setTimeout

    return (dispatch) => {
        dispatch(fetchEventBegin());
        const event = events.filter((element) => (element.id).toString() === id)[0];
        setTimeout(() => {
            dispatch(fetchEventSuccess(event));
        }, 100);
        return event;

        // return fetch('')
        //     .then(handleErrors)
        //     .then(res => res.json())
        //     .then(json => {
        //         dispatch(fetcheventSuccess(json.products));
        //         return json.products;
        //     })
        //     .catch(error => dispatch(fetcheventFailure(error)));
    };
};

export const toggleGoing = () => ({
    type: actionType.TOGGLE_GOING,
});

