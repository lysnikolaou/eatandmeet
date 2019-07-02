import React, {Component} from 'react';
import {connect} from 'react-redux';
import Octicon, {
    Calendar, Clock, Location,
} from '@githubprimer/octicons-react';
import {Link} from 'react-router-dom';
import cx from 'classnames';
import Loader from '../loadingComponent';
import * as actions from './actions';
import {getDay} from '../../utils/date';

import {
    FacebookShareButton,
    TwitterShareButton,
    TelegramShareButton,
    WhatsappShareButton,
    RedditShareButton,
    TumblrShareButton,
    EmailShareButton,
    FacebookIcon,
    TwitterIcon,
    WhatsappIcon,
    TelegramIcon,
    EmailIcon,
    TumblrIcon,
    RedditIcon,
} from 'react-share';

import * as styles from './style.module.scss';

const mapStateToProps = (state) => {
    return {
        loading: state.event.loading,
        event: state.event.event,
        error: state.event.error,
        user: state.authentication.user,
        going: state.event.going,
    };
};

class EventPage extends Component {
    constructor (props) {
        super(props);
        this.toggleGoing = this.toggleGoing.bind(this);
        this.checkGoing = this.checkGoing.bind(this);
    }

    componentDidMount () {
        const {id} = this.props.match.params;
        this.props.dispatch(actions.fetchEvent(id));
    }

    checkGoing () {
        const userId = this.props.user.id;
        const {members} = this.props.event;
        if (members.includes(userId)) {
            this.props.dispatch(actions.toggleGoing());
        }
    }

    toggleGoing () {
        this.props.dispatch(actions.toggleGoing());
    }

    render () {
        const {
            error, loading, event,
            going,
        } = this.props;
        if (loading) {
            return (
                <Loader/>
            );
        }
        const url = window.location.href;
        const date = getDay(event.date);
        return (
            <div className='row'>
                <div className={cx('center', 'col-lg-7', 'col-12', 'card', going && 'card_go')}>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <div className="row">
                                <div className="col-lg-3 col-md-3 col-sm-3 col-4 text-center">
                                    {
                                        event.avatar
                                            ? <img src={event.avatar} className="avatar" alt="avatar"/>
                                            : <div className="avatar">
                                                <Octicon icon={Calendar} size="medium" className="icon_style"/>
                                            </div>
                                    }
                                </div>
                                <div className="col-lg-9 col-md-9 col-sm-9 col-8 ">
                                    <em className="gray-text">
                                        {event.creator} presents:
                                    </em>
                                    <h3 className="display-5">
                                        {event.title}
                                    </h3>
                                </div>
                            </div>
                        </li>
                        <li className="list-group-item text-center">
                            <button
                                className="btn-jungle"
                                onClick={this.toggleGoing}
                            >
                                {
                                    this.props.going
                                        ? 'Leave Event'
                                        : 'Join Event'
                                }
                            </button>
                        </li>
                        <li className="list-group-item">
                            <div className="row">
                                <Octicon icon={Clock} size="medium" className="float-right"/>
                                <div className="col">
                                    {`${date}, ${new Date(event.date).getFullYear()}`}
                                    <br/>
                                    {event.time}
                                    <br/>
                                </div>
                            </div>
                        </li>
                        <li className="list-group-item">
                            <div className="row">
                                <Octicon icon={Location} size="medium" className="float-right"/>
                                <div className="col">
                                    <a
                                        rel="noopener noreferrer"
                                        target="_blank"
                                        href={`https://www.google.com/maps/search/+${event.location}`}
                                    >
                                        {event.location}
                                    </a>
                                    <br/>
                                    {event.time}
                                </div>
                            </div>
                        </li>
                        <li className="list-group-item row">
                            <h4>
                                Details
                            </h4>
                            <p>
                                {event.about}
                            </p>
                        </li>
                        <li className="list-group-item">
                            <h4>
                                Share
                            </h4>
                            <div className="text-center">
                                <div className={styles.share}>
                                    <TwitterShareButton url={url}>
                                        <TwitterIcon size={32} round={true} className="d-inline"/>
                                    </TwitterShareButton>
                                </div>
                                <div className={styles.share}>
                                    <FacebookShareButton url={url}>
                                        <FacebookIcon size={32} round={true} className="d-inline"/>
                                    </FacebookShareButton>
                                </div>
                                <div className={styles.share}>
                                    <TelegramShareButton url={url}>
                                        <TelegramIcon size={32} round={true} className="d-inline"/>
                                    </TelegramShareButton>
                                </div>
                                <div className={styles.share}>
                                    <WhatsappShareButton url={url}>
                                        <WhatsappIcon size={32} round={true} className="d-inline"/>
                                    </WhatsappShareButton>
                                </div>
                                <div className={styles.share}>
                                    <RedditShareButton url={url}>
                                        <RedditIcon size={32} round={true} className="d-inline"/>
                                    </RedditShareButton>
                                </div>
                                <div className={styles.share}>
                                    <TumblrShareButton url={url}>
                                        <TumblrIcon size={32} round={true} className="d-inline"/>
                                    </TumblrShareButton>
                                </div>
                                <div className={styles.share}>
                                    <EmailShareButton url={url}>
                                        <EmailIcon size={32} round={true} className="d-inline"/>
                                    </EmailShareButton>
                                </div>
                            </div>
                        </li>
                        <li className="list-group-item">
                            <div className="row">
                                <div className={cx('gray-text', event.RVSP.percentage >= 0.8 && 'col-sm-9 col-10')}>
                                    {event.RVSP.attending} Members going / {event.RVSP.capacity} slots in Total
                                </div>
                                {event.RVSP.percentage >= 0.8 &&
                                    <div className="col-sm-3 text-danger">
                                        {event.RVSP.available} slots left!
                                    </div>
                                }
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps)(EventPage);
