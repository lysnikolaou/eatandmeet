import FeedList from './feedList';
import {connect} from 'react-redux';

const getVisibileFeed = (feeds, date) => {
    return feeds;
};

const mapStateToProps = (state) => {
    return {
        feeds: getVisibileFeed(state.feed.items, state.date.date),
    };
};

const connectedFeed = connect(mapStateToProps)(FeedList);
export {connectedFeed as FeedList};
