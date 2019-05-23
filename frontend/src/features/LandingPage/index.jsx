import React, {Component} from 'react';
import {Link, NavLink} from 'react-router-dom'
import LoginPage from '../LoginPage';

import * as styles from './index.scss';

class Index extends Component {
    render() {
        return (
            <div className={styles.cover}>
                <NavLink to={'/login'} component={LoginPage}>
                    Login
                </NavLink>
                <div>hello hello</div>
            </div>
        );
    }
}

export default Index;
