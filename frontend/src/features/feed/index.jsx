import React, {Component} from 'react';
import FeedItem from '../../components/FeedItem';
import {feed} from '../../fakedata/feed';
import {getDay} from "../../utils/date";

class Feed extends Component {
    render() {

    const dataItems = feed.map(
        datePackage =>(
            <div>
            <p className="text-center">{getDay(datePackage.date)}</p>
            {datePackage.events.map(
                item=>(
                <FeedItem {...item}/>
        ))}
            </div>
        )
    );


    return (

            <div className="align-content-lg-center">
                {dataItems}
            </div>
        );
    }
}

export default Feed;
