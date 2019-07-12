import * as actionTypes from './action-types';

const initialState = {
    event: null,
    error: null,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.POST_EVENT_BEGIN:
            return {
                ...state,
                error: null,
            };
        case actionTypes.POST_EVENT_SUCCESS:
            return {
                ...state,
                event: action.event,
            };
        case actionTypes.POST_EVENT_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error,
                event: null,
            };
        default:
            return state;
    }
};

export default reducer;
