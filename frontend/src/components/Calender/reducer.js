import * as actionTypes from './action-types';

const reducer = (
    state = {date: null},
    action
) => {
    switch (action.type) {
        case actionTypes.FILTER_DATE: {
            return {
                ...state,
                date: action.date,
            };
        }
        case actionTypes.CLEAR: {
            return {
                ...state,
                date: '',
            };
        }
        default: { return state; }
    }
};

export default reducer;
