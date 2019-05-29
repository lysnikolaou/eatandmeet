import React, {Component} from 'react';
import {Switch} from 'react-router-dom';


import * as Paths from './paths';
import EventCard from './EventCard';
import Welcome from './Welcome';

import WelcomeLayoutRoute from "../WelcomePage/components/layout";

class WelcomeEntrance extends Component {
    render() {
        return (
            <Switch>
                <WelcomeLayoutRoute
                    exact path={Paths.SANDBOX}
                    component={Welcome}
                />
                <WelcomeLayoutRoute
                    path={Paths.EVENTCARD}
                    component={EventCard}
                />
                <WelcomeLayoutRoute
                    to={Paths.SANDBOX}
                />
            </Switch>
        );
    }
}

export default WelcomeEntrance;
