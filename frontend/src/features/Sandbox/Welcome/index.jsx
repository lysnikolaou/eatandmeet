import React, {Component} from 'react';
import {Link} from 'react-router-dom'

import * as paths from '../paths';

class Welcome extends Component {
    render() {
        return (
            <div>
                <Link to={paths.EVENTCARD} className="link">Event-Card</Link>
            </div>
        );
    }
}

export default Welcome;
