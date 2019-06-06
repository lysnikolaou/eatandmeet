import React, {Component} from 'react';
import {
    Switch,
    Redirect,
    Route,
} from 'react-router-dom';

import MainLayoutRoute from "../../components/MainLayout";
import WelcomeLayoutRoute from "../../components/WelcomeLayout";

import WelcomeEntrance from '../landing/entrance';

import Feed from "../feed"
import ProfilePage from "../../components/UserProfile";

import * as paths from './paths';


class Entrance extends Component {
    render() {
        return (
            <Switch>
                <MainLayoutRoute
                    exact path={paths.FEED}
                    component={Feed}
                />

                <MainLayoutRoute
                    path={paths.PROFILE}
                    component={ProfilePage}
                />

                <Redirect to={paths.FEED} />

            </Switch>
        );
    }
}

export default Entrance;
