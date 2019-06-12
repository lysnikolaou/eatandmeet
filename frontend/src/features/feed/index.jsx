import React, {Component} from 'react';
import FeedItem from '../../components/FeedItem';
import {feeddata} from '../../fakedata/feed';
import {getDay} from '../../utils/date';
import {FeedList} from './Components/VisibileFeed';
import {FeedCalendar} from '../calender';
import * as cx from 'classnames';

import './index.scss';
import {connect} from "react-redux";
import {userActions} from "../../actions/user.actions";

import * as actions from './actions';

class Feed extends Component {
    constructor (props) {
        super(props);

        this.state = {
            date: new Date(),
        };
    }

    componentDidUpdate (prevProps) {
        if (prevProps.match.params.day !== this.props.match.params.day) {
            this.setState({
                date: new Date(`${this.props.match.params.year}/${this.props.match.params.month}/${this.props.match.params.day}`),
            });
        }
    }

    componentDidMount () {
        this.props.dispatch(actions.fetchProducts());
    }

    render () {
        return (
            <div className="row">
                <div className={cx('col-xl-2', 'col-lg-3', 'offset-xl-1', 'col-0')}>
                    <FeedCalendar day={this.state.date} />
                </div>
                <div className={cx('col-xl-6', 'col-lg-7', 'col-12')}>
                    <p>{this.state.date.toString()}</p>
                    <FeedList feeds={this.state.feed} />
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    const {feed} = state.feed;
    return {
        feed,
    };
};

const connectedFeedPage = connect(mapStateToProps)(Feed);
export {connectedFeedPage as Feed};
