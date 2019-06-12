import React from 'react';
import FeedItem from '../../../components/FeedItem';
import {getDay} from '../../../utils/date';

const FeedList = ({feeds}) => (
    <ul>
        {feeds.map((day) => {
            return (
                <div key={day.date} >
                    <p className="text-center">{getDay(day.date)}</p>
                    {day.events.map(
                        (item) => <FeedItem key={item.id} {...item} />
                    )}
                </div>
            );
        })
        }
    </ul>
);

export default FeedList;
