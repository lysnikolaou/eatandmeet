import * as actionTypes from './action-types';

const initialState = {
    event: null,
    loading: true,
    error: null,
    going: false,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_EVENT:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case actionTypes.FETCH_EVENT_BEGIN:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case actionTypes.FETCH_EVENT_SUCCESS:
            return {
                ...state,
                loading: false,
                event: action.event,
                going: action.going,
            };
        case actionTypes.FETCH_EVENT_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error,
                event: null,
            };
        case actionTypes.TOGGLE_GOING:
            return {
                ...state,
                going: !state.going,
            };
        default:
            return state;
    }
};

export default reducer;
