import FeedList from './feedList';
import {connect} from 'react-redux';

const getVisibileFeed = (feeds, date) => {
    if (date) {
        return feeds.filter((d) => {
            return (
                new Date(d.date).getTime() === new Date(date).getTime()
            );
        });
    }
    return feeds;
};

const mapStateToProps = (state) => {
    return {
        feeds: getVisibileFeed(state.feed.items, state.date.date),
    };
};

const connectedFeed = connect(mapStateToProps)(FeedList);
export {connectedFeed as FeedList};
