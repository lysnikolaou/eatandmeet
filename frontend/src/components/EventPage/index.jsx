import React, {Component} from 'react';
import {connect} from 'react-redux';
import Octicon, {
    Calendar, Clock, Location,
} from '@githubprimer/octicons-react';
import cx from 'classnames';
import Loader from '../loadingComponent';
import * as actions from './actions';
import {getDay} from '../../utils/date';
import Button from '../Button';
import * as buttonColors from '../Button/colors';
import Share from '../Share';

import * as styles from './index.module.scss';

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
            loading,
            event,
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
            <div className="row">
                <div className={cx('center', 'col-lg-7', 'col-12', 'card', {
                    [styles.card_go]: going,
                })}>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <div className="row">
                                <div className="col-lg-3 col-md-3 col-sm-3 col-4 text-center">
                                    {
                                        event.avatar
                                            ? <img src={event.avatar} className={styles.avatar} alt="avatar"/>
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
                            <Button
                                color={cx({
                                    [buttonColors.GREEN]: !this.props.going,
                                    [buttonColors.RED]: this.props.going,
                                })}
                                onClick={this.toggleGoing}
                            >
                                {
                                    this.props.going
                                        ? 'Leave Event'
                                        : 'Join Event'
                                }
                            </Button>
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
                            <h4>Details</h4>
                            <p>{event.about}</p>
                        </li>
                        <li className="list-group-item row">
                            <h4>Topics</h4>
                            <p>
                                {event.topics.map((element) => {
                                    return `// ${element} `;
                                })}
                            </p>
                        </li>
                        <li className="list-group-item row">
                            <h4>Share</h4>

                            <Share
                                url={url}
                                size={32}
                                round
                            />
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
