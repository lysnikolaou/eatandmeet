import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import logo from "../../../../static/images/logo/logo.svg";
import './index.scss'   // style


const WelcomeLayout = ({ children }) => (
    <div>
        <div className={"cover"}/>
        <div className="bg-text">
            <img src={logo} className="landing_logo" alt="logo"/>
            {children}
        </div>
    </div>
    );

const WelcomeLayoutRoute = ({component: Component, ...rest}) => {
    return (
        <Route {...rest} render={matchProps => (
            <WelcomeLayout>
                <Component {...matchProps} />
            </WelcomeLayout>
            )} />
    )
};

export default WelcomeLayoutRoute;
