import * as actionType from './action-types';
import {eventService} from '../../services/event.service';

export const fetchFeed = () => {
    const request = () => { return {type: actionType.FETCH_FEED_BEGIN}; };

    const success = (events) => {
        return {
            type: actionType.FETCH_FEED_SUCCESS,
            events,
        };
    };

    const failure = (error) => {
        return {
            type: actionType.FETCH_FEED_FAILURE, error,
        };
    };

    return (dispatch) => {
        dispatch(request());
        eventService.getAll()
            .then(
                (events) => dispatch(success(events)),
                (error) => dispatch(failure(error.toString())),
            );
    };
};
