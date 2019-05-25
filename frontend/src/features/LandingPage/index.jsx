import React, {Component} from 'react';

import './index.scss'   // style
import logo from "../../static/images/logo/logo.svg";
import Navigation from "../../components/Navigation";

class Index extends Component {
    render() {
        return (
            <div>
                <Navigation/>
                <div className={"cover"}/>
                <div className="bg-text">
                    <img src={logo} className="landing_logo" alt="logo"/>

                    <h1 >WELCOME TO EAT&MEET - A FOOD DATE MATCHING APP</h1>
                    <div className="mb-4 mt-3">
                        Join our Growing Community for free
                    </div>
                    <div className="row justify-content-md-center">
                        <div className="col col-lg-4">
                        <button type="button" className="btn btn-raspberry btn-rounded btn-block">Login</button>
                        </div>
                        <div className="col col-lg-4">
                            <button type="button" className="btn btn-jungle btn-rounded btn-effect btn-block">Register Now!</button>
                        </div>
                    </div>

            </div>
            </div>
        );
    }
}

export default Index;
