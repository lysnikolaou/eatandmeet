import React from 'react';
import {Route} from 'react-router-dom';

import {Navigation} from '../../components/Navigation';

import './index.scss';
import DataInfo from '../DataInfo';

const MainLayout = ({children}) => {
    return (
        <div className="bg-gray fill container-fluid body">
            {children}
        </div>
    );
};

const MainLayoutRoute = ({
    component: Component, ...rest
}) => {
    return (
        <Route {...rest} render={(matchProps) => {
            return (
                <div>
                    <Navigation {...matchProps}/>
                    <DataInfo/>
                    <MainLayout>
                        <Component {...matchProps} />
                    </MainLayout>
                </div>
            );
        }} />
    );
};

export default MainLayoutRoute;
