import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import Octicon, {
    Calendar, Flame,
} from '@githubprimer/octicons-react';

import cx from 'classnames';

import './index.scss';

class FeedItem extends Component {
    render () {
        const {props} = this;
        return (
            <div className={cx('card', props.going && 'card_go')}>
                <Link to={`/event/${props.id}`}>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <div className="row">
                                <div className="col-lg-3 col-md-3 col-sm-3 col-4 text-center">
                                    <h5 className="time">{props.time}</h5>
                                    {
                                        props.avatar
                                            ? <img src={props.avatar} className="avatar" alt="avatar"/>
                                            : <div className="avatar">
                                                <Octicon icon={Calendar} size="medium" className="icon_style"/>
                                            </div>
                                    }
                                </div>
                                <div className="col-lg-9 col-md-9 col-sm-9 col-8 ">
                                    {props.going && <div className="go_notification">
                                            Going
                                        <Octicon icon={Flame} size="small" className="float-right fire"/>
                                    </div>}
                                    <em className="gray-text">
                                        {props.creator} presents:
                                    </em>
                                    <h3 className="display-5">
                                        {props.title}
                                    </h3>
                                    <h5 className="display-5 gray-text">
                                        {props.location}
                                    </h5>
                                </div>

                            </div>
                        </li>
                        <li className="list-group-item">
                            <div className="row">
                                <div className={cx('gray-text', props.RVSP.percentage >= 0.8 && 'col-sm-9 col-10')}>
                                    {props.RVSP.attending} Members going / {props.RVSP.capacity} slots in Total
                                </div>
                                {
                                    props.RVSP.percentage >= 0.8 &&
                                        <div className="col-sm-3 text-danger">
                                            {props.RVSP.available} slots left!
                                        </div>
                                }
                            </div>
                        </li>
                    </ul>
                </Link>
            </div>

        );
    }
}

export default FeedItem;
