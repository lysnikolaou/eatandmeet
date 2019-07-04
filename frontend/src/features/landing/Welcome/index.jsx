import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Button from '../../../components/Button';
import * as ButtonColors from '../../../components/Button/colors';

import * as paths from '../paths';

import * as styles from '../index.module.scss';

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
                            <Button
                                type="button"
                                color={ButtonColors.RED}
                                className={styles.btn_width}
                            >Login
                            </Button>
                        </Link>
                    </div>
                    <div className="col col-lg-4">
                        <Link to={paths.REGISTER}>
                            <Button
                                type="button"
                                color={ButtonColors.GREEN}
                                className={styles.btn_width}
                            >Register
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default Landing;
