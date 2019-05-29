import React, {Component} from 'react';
import * as paths from '../paths';
import {Link} from "react-router-dom";

import EventCard from '../../../components/EventCard';
import DemoData from './demo'

class Index extends Component {
    render() {
        return (
            <div className={"container d-2 flex-row "}>
                <div className="d-flex p-2 justify-content-center">{<EventCard item={DemoData}/>}</div>
                <div className="d-flex p-2 justify-content-center">
                    <Link to={paths.SANDBOX} className="link">Back to SANDBOX</Link>
                </div>
            </div>
        );
    }
}

export default Index;
