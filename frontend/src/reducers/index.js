import {combineReducers} from 'redux';

import {authentication} from './authentication.reducer';
import {registration} from './registration.reducer';
import {users} from './users.reducer';
import {alert} from './alert.reducer';
import * as feed from '../components/Calender/reducer';

const index = combineReducers({
    authentication,
    registration,
    users,
    alert,
    feed,
});

export default index;
