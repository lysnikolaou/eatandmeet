import * as actionTypes from './action-types';

const initialState = {
    events: [],
    loading: false,
    error: null,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_FEED_BEGIN:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case actionTypes.FETCH_FEED_SUCCESS:
            return {
                ...state,
                loading: false,
                events: action.events,
            };
        case actionTypes.FETCH_FEED_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error,
                events: [],
            };
        default:
            return state;
    }
};

export default reducer;
