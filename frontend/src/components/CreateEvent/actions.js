import * as actionType from './action-types';
import {eventService} from '../../services/event.service';

export const addEvent = (event) => {
    const request = () => { return {type: actionType.POST_EVENT_BEGIN}; };

    const success = (data) => {
        return {
            type: actionType.POST_EVENT_SUCCESS,
            event: data,
        };
    };

    const failure = (error) => {
        return {
            type: actionType.POST_EVENT_FAILURE, error,
        };
    };

    return (dispatch) => {
        dispatch(request());
        eventService.post(event)
            .then(
                (data) => dispatch(success(data)),
                (error) => dispatch(failure(error.toString()))
            );
    };
};
