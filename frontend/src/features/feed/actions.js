import * as actionType from './action-types';
import {feeddata} from '../../fakedata/feed';

export const fetchFeedBegin = () => ({
    type: actionType.FETCH_FEED_BEGIN,
});

export const fetchFeedSuccess = (products) => ({
    type: actionType.FETCH_FEED_SUCCESS,
    payload: {products},
});

export const fetchFeedFailure = (error) => ({
    type: actionType.FETCH_FEED_FAILURE,
    payload: {error},
});

// Handle HTTP errors since fetch won't.
export const handleErrors = (response) => {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
};

export const fetchProducts = () => {
    return (dispatch) => {
        dispatch(fetchFeedBegin());
        dispatch(fetchFeedSuccess(feeddata));
        return feeddata;

        // return fetch('')
        //     .then(handleErrors)
        //     .then(res => res.json())
        //     .then(json => {
        //         dispatch(fetchFeedSuccess(json.products));
        //         return json.products;
        //     })
        //     .catch(error => dispatch(fetchFeedFailure(error)));
    };
};
