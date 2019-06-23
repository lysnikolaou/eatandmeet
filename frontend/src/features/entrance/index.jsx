import React, {Component} from 'react';
import {
    Switch,
    Redirect,
} from 'react-router-dom';

import MainLayoutRoute from '../../components/MainLayout';

import {Feed} from '../feed';
import {ProfilePage} from '../../components/UserProfile';

import * as paths from './paths';
import EventPage from '../../components/EventPage';
import LoadingComponent from "../../components/loadingComponent";

class Entrance extends Component {
    render () {
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

                <MainLayoutRoute
                    path={`${paths.FEED}/:year/:month/:day`}
                    component={Feed}
                />

                <MainLayoutRoute
                    path={`${paths.EVENT}/:id`}
                    component={EventPage}

                />

                <MainLayoutRoute
                    path={paths.LOADER}
                    component={LoadingComponent}
                    text="this is a demo"
                />

                <Redirect to={paths.FEED} />
            </Switch>
        );
    }
}

export default Entrance;
