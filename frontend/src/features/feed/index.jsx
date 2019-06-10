import React, {Component} from 'react';
import FeedItem from '../../components/FeedItem';
import {feed} from '../../fakedata/feed';
import {getDay} from '../../utils/date';
import {FeedCalendar} from '../calender';

import './index.scss';

class Feed extends Component {
    render () {
        const dataItems = feed.map(
            (datePackage) => {
                return (
                    <div key={datePackage.date} >
                        <p className="text-center">{getDay(datePackage.date)}</p>
                        {datePackage.events.map(
                            (item) => <FeedItem key={item.title} {...item}/>

                        )}
                    </div>
                );
            }

        );

        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-3 col-0">
                        <FeedCalendar />
                    </div>
                    <div className="col-sm-9 col-12">
                        {dataItems}
                    </div>
                </div>
            </div>
        );
    }
}

export default Feed;
