import React, {Component} from 'react';
import logo from '../../static/images/logo/logo.svg';
import {Link} from 'react-router-dom';
import {userActions} from '../../actions/user.actions';
import {connect} from 'react-redux';

import cx from 'classnames';

import * as styles from './index.module.scss';

import * as paths from '../../features/entrance/paths';

class Navigation extends Component {
    constructor (props) {
        super(props);
        this.handleLogout = this.handleLogout.bind(this);
    }

    handleLogout () {
        this.props.dispatch(userActions.logout(this.props.user.id));
    }

    render () {
        return (
            <nav className={cx('navbar', 'navbar-expand-sm', 'navbar-light', styles.bg_jungle, styles.navbar)}>
                <a className="navbar-brand" href={paths.FEED}><img src={logo} alt="logo" className={styles.logo}/></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href={paths.FEED}>Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href={paths.PROFILE} style={{textTransform: 'capitalize'}}>{this.props.user.firstName} <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Link</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Dropdown
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="/">Action</a>
                                <a className="dropdown-item" href="/">Another action</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="/">Something else here</a>
                            </div>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" href="/">Disabled</a>
                        </li>
                    </ul>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link " onClick={this.handleLogout} to={paths.WELCOME}> Logout</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

const mapStateToProps = (state) => {
    const {authentication} = state;
    const {user} = authentication;
    return {
        user,
    };
};

const connectedHomePage = connect(mapStateToProps)(Navigation);
export {connectedHomePage as Navigation};
