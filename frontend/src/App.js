import React from 'react';
import { Router, Route } from 'react-router-dom';
import {connect} from "react-redux";

import  PrivateRoute from './components/PrivateRoute';
import {HomePage} from './features/HomePage';
import Entrance from './features/WelcomePage/entrance'
import { history } from "./helpers/history";
import { alertActions } from "./actions/alert.actions";


class App extends React.Component {
    constructor(props) {
        super(props);

        const { dispatch } = this.props;
        history.listen((location, action) => {
            // clear alert on location change
            dispatch(alertActions.clear());
        });
    }
    render() {
        const { alert } = this.props;
        return (
            <div className="App">
                {alert.message &&
                    <div className={`alert ${alert.type}`}>{alert.message}</div>
                }
                <Router history={history}>
                    <PrivateRoute exact path="/" component={HomePage}/>
                    <Route path="/welcome" component={Entrance}/>
                </Router>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { alert } = state;
    return {
        alert
    };
}

const connectedApp = connect(mapStateToProps)(App);
export { connectedApp as App };
