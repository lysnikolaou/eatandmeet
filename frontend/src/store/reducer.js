import {combineReducers} from 'redux';

import {authentication} from '../reducers/authentication.reducer';
import {registration} from '../reducers/registration.reducer';
import {users} from '../reducers/users.reducer';
import {alert} from '../reducers/alert.reducer';
import date from '../features/feed/calender/reducer';
import feed from '../features/feed/redeucer';

const index = combineReducers({
    authentication,
    registration,
    users,
    alert,
    date,
    feed,
});

export default index;
