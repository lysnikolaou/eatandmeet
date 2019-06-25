import React, {Component} from 'react';
import {FeedList} from './Components/VisibileFeed';
import {FeedCalendar} from '../../components/Calender';
import * as cx from 'classnames';

import {connect} from 'react-redux';

import * as actions from './actions';

class Feed extends Component {
    constructor (props) {
        super(props);

        this.state = {
            date: '',
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
        if (this.props.match.day) {
            const urlDate = new Date(`${this.props.match.params.year}/${this.props.match.params.month}/${this.props.match.params.day}`);
            this.setState({
                date: urlDate,
            });
        }
        this.props.dispatch(actions.fetchProducts());
    }

    render () {
        let urlDate ='';
        if (this.props.match.day) { urlDate = new Date(`${this.props.match.params.year}/${this.props.match.params.month}/${this.props.match.params.day}`); } else {
            urlDate = new Date();
        }
        return (
            <div className="row">
                <div className={cx('col-xl-2', 'col-lg-3', 'offset-xl-1', 'col-0')}>
                    <FeedCalendar day={urlDate} />
                </div>
                <div className={cx('col-xl-6', 'col-lg-7', 'col-12')}>
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
