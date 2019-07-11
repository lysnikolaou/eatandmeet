import React from 'react';

const TOPIC_CHOICES = [
    'Politics',
    'Films',
    'Education',
    'Music', 'Travel',
    'Sports',
    'Music',
    'Movies',
    'Books',
    'Technology',
    'Science',
    'Animals',
    'Celebrities',
    'News',
    'General',
    'Smalltalk',
];

const topicItem =(topic, onClick) => {
    return (
        <li>
            <input
                type="checkbox"
                id="checkboxOne"
                value="politics"
                onClick={onClick} />
            <label htmlFor="checkbox">topic</label>
        </li>
    );
};

export const Topics =(onclick) => {
    const topics = TOPIC_CHOICES.map((topic) => topicItem(topic, onclick));
    return (
        <ul className="ks-cboxtags">
            {topics}
        </ul>
    );
};
