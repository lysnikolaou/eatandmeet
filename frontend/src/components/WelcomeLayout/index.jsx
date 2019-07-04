import React from 'react';
import {Route} from 'react-router-dom';

import logo from '../../static/images/logo/logo.svg';
import './index.scss';
import DataInfo from "../DataInfo"; // style

const WelcomeLayout = ({children}) => <div className="bg-gray">
    <div className={'cover'}/>
    <div className="bg-text">
        <div className="row">
            <img src={logo} className="landing_logo img-responsive" alt="logo"/>
        </div>
        {children}
    </div>
</div>;
const WelcomeLayoutRoute = ({
    component: Component, ...rest
}) => {
    return (
        <Route {...rest} render={(matchProps) => <WelcomeLayout>
            <DataInfo/>
            <Component {...matchProps} />
        </WelcomeLayout>
        } />
    );
};

export default WelcomeLayoutRoute;
