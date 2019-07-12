import React from 'react';
import FeedItem from '../../../components/FeedItem';
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
    feed, users, userId,
}) => {
    if (feed) {
        feed = feed.sort((a,b) => {
            const aDate = new Date(a.date);
            const bDate = new Date(b.date);
            return aDate - bDate;
        });
        feedList = feed.map((event) => {
            const creator = users.filter((user) => {
                return user.id === event.event_creator;
            });
            const going = event.event_members.includes(userId);
            const date = new Date(event.date);
            const time = `${date.getUTCHours()}:${date.getMinutes()}`;
            return (
                <FeedItem key={event.id} {...event} creator={creator[0].username} time={time} going={going}/>
            );
        });
    }
    return (
        <div>{feedList}</div>
    );
};

export default FeedList;
