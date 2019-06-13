import React, {Component} from 'react';
import Calendar from 'react-calendar';
import {connect} from 'react-redux';
import './index.scss';

import * as calenderActions from '../feed/calender/actions';
import {feeddata} from "../../fakedata/feed";
import * as feedActions from "../feed/actions";
import * as paths from '../entrance/paths';

import { Link } from 'react-router-dom';
import {history} from "../../helpers/history";

class FeedCalendar extends Component {
    constructor (props) {
        super(props);

        this.state = {
            date: new Date(),
        };

        this.onChange = this.onChange.bind(this);
    }

    componentDidMount () {
        if (this.props) {
            this.setState({
                date: this.props.day,
            });
            this.props.dispatch(calenderActions.filterDate(this.props.day));

        }
    }

    onChange (date) {
        const {dispatch} = this.props;
        if (this.state.date && date.getTime() === this.state.date.getTime()) {
            this.setState({date: new Date()});
            dispatch(calenderActions.clear());
            history.push(paths.FEED);
        } else {
            this.setState({date});
            dispatch(calenderActions.filterDate(date));
            history.push(`${paths.FEED}/${date.getFullYear()}/${date.getMonth()+1}/${date.getDate()}`);
        }
    }

    render () {
        return (
            <Calendar
                onChange={this.onChange}
                value={this.state.date}
                className="center calender-container"
            />

        );
    }
}

const mapStateToProps = (state) => {
    const {date} = state.date;
    return {
        date,
    };
};

const connectedCalender = connect(mapStateToProps)(FeedCalendar);
export {connectedCalender as FeedCalendar};
