// This is the Component which Decide whether a user will be redirect to Login/Register Page or logged into Web
// Basically a gate

import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({component: Component, ...rest}) => (
    <Route {...rest}
        render= {props => (
            localStorage.getItem('user')
            ? <Component {...props} />
            : <Redirect to = {{ pathname: '/login', state: { from: props.location} }} />
        )}
    />
);

export default PrivateRoute;
