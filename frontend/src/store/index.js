import {
    createStore,
    applyMiddleware,
} from 'redux';

import {composeWithDevTools} from 'redux-devtools-extension';

import reducer from './reducer';
import middleware from './middleware';

const store = (() => {
    return createStore(reducer, composeWithDevTools(
        applyMiddleware(
            ...middleware,
        )
    ));
})();

export default store;

/** @namespace window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ */
