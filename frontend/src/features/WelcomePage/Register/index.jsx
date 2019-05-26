import React from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions } from '../../../actions/user.actions';

import {ValidateEmail, ValidatePassword} from "./validate";

import './index.scss'

class Register extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {
                firstName: '',
                lastName: '',
                password: '',
                    email: ''
            },
            submitted: false,
            errors: {
                emailError: '',
                passwordError: ''
            },
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const { name, value } = event.target;
        const { user } = this.state;
        this.setState({
            user: {
                ...user,
                [name]: value
            }
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        this.setState({ submitted: true });
        const { user } = this.state;
        const { dispatch } = this.props;
        let passwordError = '';
        let emailError = '';


        user.password ?  passwordError = ValidatePassword(user.password) : passwordError = '';
        user.email ?  emailError = ValidateEmail(user.email) : emailError = '';
        this.setState({
            errors: {
                emailError: emailError,
                passwordError: passwordError
            }
        });
        if (user.firstName && user.lastName && user.password  && user.email && !emailError && !passwordError) {
            dispatch(userActions.register(user));
        }
    }

    render() {
        const { registering  } = this.props;
        const { user, submitted, errors } = this.state;
        return (
            <div className="center container-fluid">
                <div className="text-center mb-4">
                    <h2>Register</h2>
                </div>
                <div className="row">
                    <form name="form" className={"center"} onSubmit={this.handleSubmit}>
                        <div className='form-row'>

                            {/* First Name */}
                            <div className={'form-group col-md-6' + (submitted && !user.firstName ? ' has-error' : '')}>
                                <input type="text" className="form-control" name="firstName" value={user.firstName} onChange={this.handleChange} placeholder="First name"/>
                                {submitted && !user.firstName &&
                                <div className="help-block text-danger">First Name is required</div>
                                }
                            </div>

                            {/* Last Name */}
                            <div className={'form-group col-md-6' + (submitted && !user.lastName ? ' has-error' : '')}>
                                <input type="text" className="form-control" name="lastName" value={user.lastName} onChange={this.handleChange} placeholder="Last name"/>
                                {submitted && !user.lastName &&
                                <div className="help-block text-danger">Last Name is required</div>
                                }
                            </div>
                        </div>

                        {/* Email Name */}
                        <div className={'form-group ' + (submitted && !user.email ? ' has-error' : '')}>
                            <input type="email" className={'form-control ' + (submitted && (!user.email || errors.emailError) ? 'is-invalid' : '')} name="email" value={user.email} onChange={this.handleChange} placeholder="Email" />
                            {submitted && !user.email &&
                            <div className="help-block text-danger">Email is required</div>
                            }
                            {submitted
                            && errors.emailError
                            && <div className="help-block text-danger">{errors.emailError}</div>
                            }
                        </div>

                        {/* Password Name */}
                        <div className={'form-group' + (submitted && !user.password ? ' has-error' : '')}>
                            <input type="password" className={'form-control ' + (submitted && (!user.password || errors.passwordError) ? 'is-invalid' : '')} name="password" value={user.password} onChange={this.handleChange} placeholder="Password"/>
                            {submitted && !user.password &&
                            <div className="help-block text-danger">Password is required</div>
                            }
                            {submitted
                            && errors.passwordError
                            && <div className="help-block text-danger">{errors.passwordError}</div>
                            }
                        </div>

                        <div className="form-row">
                            <div className="form-group center">
                                <button className="btn btn-jungle">Register</button>
                                {registering &&
                                <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                                }
                                <Link to="/welcome" className="btn link">Cancel</Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { registering } = state.registration;
    return {
        registering
    };
}

const connectedRegisterPage = connect(mapStateToProps)(Register);
export { connectedRegisterPage as Register};
