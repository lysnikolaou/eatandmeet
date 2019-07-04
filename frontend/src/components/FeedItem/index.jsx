import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import Octicon, {
    Calendar, Flame,
} from '@githubprimer/octicons-react';

import cx from 'classnames';

import * as styles from './index.module.scss';

class FeedItem extends Component {
    render () {
        const {props} = this;
        return (
            <div className={cx(styles.card, 'card',
                {[styles.card_go]: props.going})}>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <div className="row">
                            <div className="col-lg-3 col-md-3 col-sm-3 col-4 text-center">
                                <h5 className={styles.time}>{props.time}</h5>
                                {
                                    props.avatar
                                        ? <img src={props.avatar} className={styles.avatar} alt="avatar"/>
                                        : <div className={styles.avatar}>
                                            <Octicon icon={Calendar} size="medium" className={styles.icon_style}/>
                                        </div>
                                }
                            </div>
                            <div className="col-lg-9 col-md-9 col-sm-9 col-8 ">
                                {props.going && <div className={styles.go_notification}>
                                        Going
                                    <Octicon icon={Flame} size="small" className={cx('float-right', styles.fire)}/>
                                </div>}
                                <em className="gray-text">
                                    {props.creator} presents:
                                </em>
                                <Link to={`/event/${props.id}`}>
                                    <h3 className="display-5">
                                        {props.title}
                                    </h3>
                                </Link>
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
            </div>

        );
    }
}

export default FeedItem;
