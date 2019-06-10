import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import {userActions} from '../../../actions/user.actions';

import * as paths from '../paths';
import cx from 'classnames';

import Loader from '../../../components/Loader';

class Login extends React.Component {
    constructor (props) {
        super(props);

        // reset login status
        this.props.dispatch(userActions.logout());

        this.state = {
            'email': '',
            'password': '',
            'submitted': false,
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange (e) {
        const {
            name, value,
        } = e.target;
        this.setState({[name]: value});
    }

    handleSubmit (e) {
        e.preventDefault();

        this.setState({'submitted': true});
        const {
            email, password,
        } = this.state;
        const {dispatch} = this.props;
        if (email && password) {
            dispatch(userActions.login(email, password));
        }
    }

    render () {
        const {loggingIn} = this.props;
        const {
            email, password, submitted,
        } = this.state;
        return (
            <div className="center container-fluid">
                <div className="text-center mb-4">
                    <h2>Login</h2>
                </div>
                <div className="row">
                    <form name="form" className={'center'} onSubmit={this.handleSubmit}>
                        {/* Email */}
                        <div className={cx('form-group', submitted && !email && 'has-error')}>
                            <input
                                type="email"
                                className={cx('form-control', submitted && !email && 'is-invalid')}
                                name="email"
                                value={email}
                                onChange={this.handleChange}
                                placeholder="Email"
                            />
                            {
                                submitted
                                && !email
                                && <div className="help-block text-danger">
                                    Email is required
                                </div>
                            }
                        </div>
                        {/* Password */}
                        <div className={cx('form-group', submitted && !password && 'has-error')}>
                            <input
                                type="password"
                                className={cx('form-control ', submitted && !password && 'is-invalid')}
                                name="password"
                                value={password}
                                onChange={this.handleChange}
                                placeholder="Password"
                            />
                            {
                                submitted
                                && !password
                                && <div className="help-block text-danger">
                                    Password is required
                                </div>
                            }
                        </div>
                        <div className="form-row">
                            <div className="form-group center">
                                <button className="btn btn-jungle">Login</button>
                                {
                                    loggingIn
                                    && <Loader/>
                                }
                                <Link to={paths.WELCOME} className="btn link">Cancel</Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    const {loggingIn} = state.authentication;
    return {
        loggingIn,
    };
};

const connectedLoginPage = connect(mapStateToProps)(Login);
export {connectedLoginPage as Login};
