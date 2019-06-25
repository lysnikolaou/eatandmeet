import React from 'react';
import FeedItem from '../../../components/FeedItem';
import {getDay} from '../../../utils/date';

const FeedList = ({feeds}) => (
    <div>
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
    </div>
);

export default FeedList;
