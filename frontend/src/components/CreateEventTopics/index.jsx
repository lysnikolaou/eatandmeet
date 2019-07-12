import React from 'react';
import './index.scss';
const TOPIC_CHOICES = [
    'Politics',
    'Education',
    'Music',
    'Travel',
    'Sports',
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

export const topicsWrapper =(onclick) => {
    const topicsList = TOPIC_CHOICES.map((topic, index) => {
        return (
            <li
                key={index}
            >
                <input
                    type="checkbox"
                    id={topic}
                    value={topic}
                    onClick={onclick}
                />
                <label htmlFor={topic}>{topic}</label>
            </li>
        );
    });
    return (
        <ul className="ks-cboxtags">
            {topicsList}
        </ul>
    );
};
