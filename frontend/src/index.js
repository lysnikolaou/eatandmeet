import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import store from './store';

import 'bootstrap-css-only/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';

import './index.scss';

import {App} from './App';
import * as serviceWorker from './serviceWorker';

// // setup fake backend
// import {configureFakeBackend} from './helpers/fake_backend';
// configureFakeBackend();

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
