import React, {Component} from 'react';
import {Switch} from 'react-router-dom';

import WelcomeLayoutRoute from "./components/layout";

import {Login} from './Login';
import {Register} from './Register';
import Landing from "./Welcome";

import * as paths from './paths';


class WelcomeEntrance extends Component {
    render() {
        return (
            <Switch>
                <WelcomeLayoutRoute
                    exact path={paths.WELCOME}
                    component={Landing}
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
