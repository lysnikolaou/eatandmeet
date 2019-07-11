import React, {Component} from 'react';
import {FeedList} from './Components/VisibileFeed';
import {FeedCalendar} from '../../components/Calender';
import * as cx from 'classnames';

import {connect} from 'react-redux';

import * as actions from './actions';
import {userActions} from '../../actions/user.actions';
import Loader from '../../components/loadingComponent';

const mapStateToProps = (state) => {
    return {
        loading: state.feed.loading || state.users.loading,
        events: state.feed.events,
        error: state.feed.error,
        users: state.users.items,
        user_id: state.us
    };
};

class Feed extends Component {
    constructor (props) {
        super(props);

        this.state = {
            date: '',
        };
    }

    // componentDidUpdate (prevProps) {
    //     if (prevProps.match.params.day !== this.props.match.params.day) {
    //         this.setState({
    //             date: new Date(`${this.props.match.params.year}/${this.props.match.params.month}/${this.props.match.params.day}`),
    //         });
    //     }
    // }

    componentDidMount () {
        // if (this.props.match.day) {
        //     const urlDate = new Date(`${this.props.match.params.year}/${this.props.match.params.month}/${this.props.match.params.day}`);
        //     this.setState({
        //         date: urlDate,
        //     });
        // }
        this.props.dispatch(actions.fetchFeed());
        this.props.dispatch(userActions.getAll());
    }

    render () {
        let urlDate ='';
        if (this.props.match.day) { urlDate = new Date(`${this.props.match.params.year}/${this.props.match.params.month}/${this.props.match.params.day}`); } else {
            urlDate = new Date();
        }
        if (this.props.loading) {
            return (
                <Loader/>
            );
        }
        return (

            <div className="row">
                <div className={cx('col-xl-2', 'col-lg-3', 'offset-xl-1', 'col-0')}>
                    <FeedCalendar day={urlDate} />
                </div>
                <div className={cx('col-xl-6', 'col-lg-7', 'col-12')}>
                    <FeedList feed={this.props.events} users={this.props.users} user={user.id} />
                </div>
            </div>
        );
    }
}


const connectedFeedPage = connect(mapStateToProps)(Feed);
export {connectedFeedPage as Feed};
