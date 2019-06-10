import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import * as paths from '../paths';

class Landing extends Component {
    render () {
        return (
            <div className="container-fluid">
                <div className="text-center">
                    <h2>WELCOME TO EAT&MEET - A FOOD DATE MATCHING APP</h2>
                </div>
                <div>
                    <p className="text-center">
                        Join our Growing Community for free
                    </p>
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
                            <button type="button" className="btn btn-jungle btn-rounded btn-block">Register</button>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default Landing;
