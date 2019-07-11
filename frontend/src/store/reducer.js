import {combineReducers} from 'redux';

import {authentication} from '../reducers/authentication.reducer';
import {registration} from '../reducers/registration.reducer';
import {users} from '../reducers/users.reducer';
import {alert} from '../reducers/alert.reducer';
import date from '../components/Calender/reducer';
import feed from '../features/feed/redeucer';
import event from '../components/EventPage/reducer';
import createEvent from '../components/CreateEvent/reducer';

const index = combineReducers({
    authentication,
    registration,
    users,
    alert,
    date,
    feed,
    event,
    createEvent,
});

export default index;
