import * as actionTypes from './action-types';

export const filterDate = (date) => ({
    type: actionTypes.FILTER_DATE,
    date,
});

export const clear = () => ({
    type: actionTypes.CLEAR,
    date: '',
});
