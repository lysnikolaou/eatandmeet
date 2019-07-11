import React, {Component} from 'react';
import {addEvent} from './actions';
import * as style from './index.module.scss';
import * as buttonColors from '../Button/colors';
import Button from '../Button';
import cx from 'classnames';
import {topicsWrapper} from '../createEventTopics';
import {connect} from 'react-redux';

class CreateEvent extends Component {
    constructor (props) {
        super(props);

        this.state = {
            event: {
                title: '',
                date: '',
                topics: [],
                places: '',
                description: '',
                slots: '',
            },
            submitted: false,
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.toggleTopic = this.toggleTopic.bind(this);
    }

    toggleTopic (e) {
        const topic= e.target.value;
        const {topics} = this.state.event;
        if (topics.includes(topic)) {
            topics.splice(topics.indexOf(topic), 1);
        } else {
            topics.push(topic);
        }
        const {event} = this.state;
        this.setState({
            event: {
                ...event,
                topics,
            },
        });
    }

    handleChange (e) {
        const {
            name,
            value,
        } = e.target;
        const {event} = this.state;
        this.setState({
            event: {
                ...event,
                [name]: value,
            },
        });
    }

    handleSubmit (e) {
        e.preventDefault();
        this.setState({submitted: true});
        const {event} = this.state;
        const {dispatch} = this.props;
        dispatch(addEvent(event));
    }

    render () {
        const {
            event,
        } = this.state;
        const topicsList = topicsWrapper(this.toggleTopic);
        return (
            <div className={cx('center', 'col-lg-7', 'col-12',)}>
                <div>
                    <h1 className={style.title}>NEW EVENT</h1>

                    <div className="create-event">
                        <form id="contact_form" onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input
                                    type="text"
                                    name="title"
                                    className="form-control"
                                    placeholder="Event Name"
                                    onChange={this.handleChange}
                                    value={event.title}

                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="places">Location</label>
                                <input
                                    type="text"
                                    name="places"
                                    className="form-control"
                                    placeholder="Location Name"
                                    onChange={this.handleChange}
                                    value={event.places}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="date">Date & Time</label>
                                <input
                                    type="datetime-local"
                                    name="date"
                                    className="form-control"
                                    placeholder="Date & Time"
                                    onChange={this.handleChange}
                                    value={event.date}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="slots">Slots</label>
                                <input
                                    type="number"
                                    name="slots"
                                    className="form-control"
                                    placeholder="Maximum Members"
                                    onChange={this.handleChange}
                                    value={event.slots}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="description">Description (max 128)</label>
                                <textarea
                                    type="text"
                                    name="description"
                                    className="form-control"
                                    placeholder="Description"
                                    maxLength="128"
                                    onChange={this.handleChange}
                                    value={event.description}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="eventDatetime">Topics</label>
                                <br />
                                {topicsList}
                            </div>
                            <Button
                                type="submit"
                                color={buttonColors.GREEN}
                            >Submit</Button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    const {event} = state.createEvent;
    return {
        event,
    };
};

const connectedPage = connect(mapStateToProps)(CreateEvent);
export {connectedPage as CreateEvent};
