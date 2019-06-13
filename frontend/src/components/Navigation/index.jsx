import React, {Component} from 'react';
import logo from '../../static/images/logo/logo.svg';
import {Link} from 'react-router-dom';
import {userActions} from '../../actions/user.actions';
import {connect} from 'react-redux';

import './index.scss';

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
            <nav className="navbar navbar-expand-sm navbar-light fixed-top bg-jungle">
                <a className="navbar-brand" href="/"><img src={logo} alt="logo" className="logo"/></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
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
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                    <Link className="nav-link" onClick={this.handleLogout} to={'/welcome'}> Logout</Link>
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
