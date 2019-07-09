import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import cx from 'classnames';

import {userActions} from '../../../actions/user.actions';

import * as paths from '../paths';
import * as Validator from './validate';

import './index.scss';
import Loader from '../../../components/Loader';
import Button from '../../../components/Button';
import * as ButtonColors from '../../../components/Button/colors';

class Register extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            user: {
                firstName: '',
                lastName: '',
                password: '',
                email: '',
                username: '',
            },
            submitted: false,
            errors: {
                emailError: '',
                passwordError: '',
                usernameError: '',
            },
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange (event) {
        const {
            name, value,
        } = event.target;
        const {user} = this.state;
        this.setState({
            user: {
                ...user,
                [name]: value,
            },
        });
    }

    handleSubmit (event) {
        event.preventDefault();

        this.setState({submitted: true});
        const {user} = this.state;
        const {dispatch} = this.props;
        const passwordError = Validator.validatePassword(user.password);
        const emailError = Validator.validateEmail(user.email);
        const usernameError = Validator.validateUsername(user.username);
        this.setState({
            errors: {
                emailError,
                passwordError,
                usernameError,
            },
        });
        if (user.firstName && user.lastName && !emailError && !passwordError && !usernameError) {
            dispatch(userActions.register(user));
        }
    }

    render () {
        const {registering} = this.props;
        const {
            user, submitted, errors,
        } = this.state;
        return (
            <div className="center container-fluid">
                <div className="text-center mb-4">
                    <h2>Register</h2>
                </div>
                <div className="row">
                    <form name="form" className={'center'} onSubmit={this.handleSubmit}>
                        <div className="form-row">

                            {/* First Name */}
                            <div className={cx('form-group', 'col-md-6', submitted && !user.firstName && 'has-error')}>
                                <input
                                    type="text"
                                    className={cx('form-control', submitted && !user.firstName && 'is-invalid')}
                                    name="firstName"
                                    value={user.firstName}
                                    onChange={this.handleChange}
                                    placeholder="First name"
                                />
                                {
                                    submitted
                                    && !user.firstName
                                    && <div className="help-block text-danger">
                                        First Name is required
                                    </div>
                                }
                            </div>

                            {/* Last Name */}
                            <div className={cx('form-group', 'col-md-6', submitted && !user.lastName && 'has-error')}>
                                <input
                                    type="text"
                                    className={cx('form-control', submitted && !user.lastName && 'is-invalid')}
                                    name="lastName"
                                    value={user.lastName}
                                    onChange={this.handleChange}
                                    placeholder="Last name"
                                />
                                {
                                    submitted
                                    && !user.lastName
                                    && <div className="help-block text-danger">
                                        Last Name is required
                                    </div>
                                }
                            </div>
                        </div>

                        <div className="form-row">

                            {/* Username Name */}
                            <div className={cx('form-group', 'col-md-6', submitted && !user.username && 'has-error')}>
                                <input
                                    type="text"
                                    className={cx('form-control', submitted && (!user.username || errors.usernameError) && 'is-invalid')}
                                    name="username"
                                    value={user.username}
                                    onChange={this.handleChange}
                                    placeholder="Username"
                                />
                                {
                                    submitted
                                    && errors.usernameError
                                    && <div className="help-block text-danger">
                                        {errors.usernameError}
                                    </div>
                                }
                            </div>

                            {/* Password Name */}
                            <div className={cx('form-group', 'col-md-6', submitted && !user.password && 'has-error')}>
                                <input
                                    type="password"
                                    className={cx('form-control', submitted && (!user.password || errors.passwordError) && 'is-invalid')}
                                    name="password"
                                    value={user.password}
                                    onChange={this.handleChange}
                                    placeholder="Password"
                                />
                                {
                                    submitted
                                    && errors.passwordError
                                    && <div className="help-block text-danger">
                                        {errors.passwordError}
                                    </div>
                                }
                            </div>
                        </div>

                        {/* Email Name */}
                        <div className={cx('form-group', submitted && !user.email && 'has-error')}>
                            <input
                                type="email"
                                className={cx('form-control', submitted && (!user.email || errors.emailError) && 'is-invalid')}
                                name="email"
                                value={user.email}
                                onChange={this.handleChange}
                                placeholder="Email"
                            />
                            {
                                submitted
                                && errors.emailError
                                && <div className="help-block text-danger">
                                    {errors.emailError}
                                </div>
                            }
                        </div>

                        <div className="form-row">
                            <div className="form-group center">
                                <Button
                                    type="button"
                                    color={ButtonColors.GREEN}
                                    onClick={this.handleSubmit}
                                >
                                    Register
                                </Button>
                                {
                                    registering
                                    && <Loader/>
                                }
                                <Link to={paths.WELCOME} className="btn link">
                                    Cancel
                                </Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    const {registering} = state.registration;
    return {
        registering,
    };
};

const connectedRegisterPage = connect(mapStateToProps)(Register);
export {connectedRegisterPage as Register};
