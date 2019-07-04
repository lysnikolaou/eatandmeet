import React from 'react';
import {Route} from 'react-router-dom';

import {Navigation} from '../../components/Navigation';

import * as styles from './index.module.scss';

import DataInfo from '../DataInfo';

import cx from 'classnames';

const MainLayout = ({children}) => {
    return (
        <div className={cx('bg-gray fill', 'container-fluid', styles.main_wrapper)}>
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
