import React, {Component} from 'react';
import {
    Route,
    Redirect,
    Switch,
} from 'react-router-dom';

import WelcomeLayoutRoute from "./components/layout";

import {Login} from './Login';
import {Register} from './Register';
import Welcome from './Welcome';

import * as paths from './paths';


class WelcomeEntrance extends Component {
    render() {
        return (
            <Switch>
                <WelcomeLayoutRoute
                    exact path={paths.WELCOME}
                    component={Welcome}
                />
                <WelcomeLayoutRoute
                    path={paths.REGISTER}
                    component={Register}
                />
                <WelcomeLayoutRoute
                    path={paths.LOGIN}
                    component={Login}
                />
                <WelcomeLayoutRoute
                    to={paths.WELCOME}
                />
            </Switch>
        );
    }
}

export default WelcomeEntrance;
