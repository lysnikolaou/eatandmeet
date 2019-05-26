import React, {Component} from 'react';
import {Link, Route} from 'react-router-dom'


import * as paths from '../paths';
import WelcomeLayoutRoute from "../components/layout";
import Register from "../Register";

class Index extends Component {
    render() {
        return (
            <div>
                <h1 >WELCOME TO EAT&MEET - A FOOD DATE MATCHING APP</h1>
                <div className="mb-4 mt-3">
                    Join our Growing Community for free
                </div>
                <div className="row justify-content-md-center">
                    <div className="col col-lg-4">
                        <Link to={paths.LOGIN} >
                            <button type="button" className="btn btn-raspberry btn-rounded btn-block">
                                Login
                            </button>
                        </Link>
                    </div>
                    <div className="col col-lg-4">
                        <Link to={paths.REGISTER}>
                            <button type="button" className="btn btn-jungle btn-rounded btn-effect btn-block">Register Now!</button>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default Index;
