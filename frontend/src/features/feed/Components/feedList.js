import React from 'react';
import FeedItem from '../../../components/FeedItem';
import {getDay} from '../../../utils/date';

import {userService} from "../../../services/user.service";

let feedList = '';

// const FeedList = ({feed}) => {
//     console.log(`this is feed ${feed}`);
//     if (feed) {
//         console.log(feed);
//         feedList = feed.map((event) => {
//             return (
//                 <div key={event.id}>
//                     <p className="text-center">{getDay(day.date)}</p>
//                     {day.events.map(
//                         (item) => <FeedItem key={item.id} {...item} />
//                     )}
//                 </div>
//             );
//         });
//     }
//     return (
//         <div>{feedList}</div>
//     );
// };

const FeedList = ({
    feed, users}) => {
    console.log(users);
    console.log(`this is feed ${feed}`);
    if (feed) {
        console.log(feed);
        feedList = feed.map((event) => {
            const creator = users.filter((user) => {
                return user.id === event.event_creator;
            });
            console.log(creator[0].username);
            return (
                <FeedItem key={event.id} {...event} creator={creator[0].username}/>
            )});
    }
    return (
        <div>{feedList}</div>
    );
};

export default FeedList;
