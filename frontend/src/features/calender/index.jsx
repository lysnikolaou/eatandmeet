import React, {Component} from 'react';
import Calendar from 'react-calendar';
import {connect} from 'react-redux';
import './index.scss';

class FeedCalendar extends Component {

    constructor (props) {
        super(props);
        this.state = {
            'date': new Date(),
        };
    }

    onChange (date) {
        this.setState({date});
    }

    render () {
        return (
            <div className="calender-container sticky-top">
                <Calendar
                    onChange={this.onChange}
                    value={this.state.date}
                />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    const {alert} = state;
    return {
        alert,
    };
};

const connectedApp = connect(mapStateToProps)(FeedCalendar);
export {connectedApp as FeedCalendar};
