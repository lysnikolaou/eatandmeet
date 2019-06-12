import * as actionTypes from './action-types';

const initialState = {
    items: [],
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
                items: action.payload.products
            };
        case actionTypes.FETCH_FEED_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error,
                items: [],
            };
        default:
            return state;
    }
};

export default reducer;
