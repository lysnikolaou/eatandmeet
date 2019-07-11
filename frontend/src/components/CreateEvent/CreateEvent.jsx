import React, {Component} from 'react';
import './CreateEvent.scss';
// import * as Validator from "../../features/landing/Register/validate";
import {addEvent} from './actions';
import {remove} from 'lodash';

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

    toggleTopic (topic) {
        const {topics} = this.state;
        if (topics.includes(topic)) {
            topics.splice(topic.indexOf(topic), 1);
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
            name, value,
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
            event, submitted,
        } = this.state;
        return (
            <div className="container">
                <div>
                    <h1 className="title">NEW EVENT</h1>

                    <div className="create-event">
                        <form id="contact_form">
                            <div className="form-group">
                                <label htmlFor="eventName">Name</label>
                                <input
                                    type="text"
                                    name={'task'}
                                    id="task"
                                    className="form-control"
                                    placeholder="Event Name"
                                    onChange={this.handleChange}
                                    value={event.title}

                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="eventLocation">Location</label>
                                <input
                                    type="text"
                                    id="location"
                                    className="form-control"
                                    placeholder="Event Location"
                                    onChange={this.handleChange}
                                    value={event.places}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="eventDatetime">Date & Time</label>
                                <input
                                    type="datetime-local"
                                    name={'datetime'}
                                    id="datetime"
                                    className="form-control"
                                    placeholder="Date & Time"
                                    onChange={this.handleChange}
                                    value={event.date}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="eventSlots">Slots</label>
                                <input
                                    type="number"
                                    name={'#members'}
                                    id="#members"
                                    className="form-control"
                                    placeholder="Maximum Members"
                                    onChange={this.handleChange}
                                    value={event.slots}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="description">Description</label>
                                <textarea
                                    type="text"
                                    id="description"
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
                                <ul className="ks-cboxtags">
                                    <li>
                                        <input
                                            type="checkbox"
                                            id="checkboxOne"
                                            value="politics"
                                            onClick={this.toggleTopic} />
                                        <label htmlFor="checkboxOne">Politics</label>
                                    </li>
                                    <li>
                                        <input
                                            type="checkbox"
                                            id="checkboxTwo"
                                            value="environment"
                                            onClick={this.toggleTopic}
                                        />
                                        <label htmlFor="checkboxTwo">Environment</label>
                                    </li>
                                    <li>
                                        <input
                                            type="checkbox"
                                            id="checkboxThree"
                                            value="education"
                                        />
                                        <label htmlFor="checkboxThree">Education</label>
                                    </li>
                                    <li>
                                        <input type="checkbox" id="checkboxFour" value="travel" />
                                        <label htmlFor="checkboxFour">Travel</label>
                                    </li>
                                    <li>
                                        <input type="checkbox" id="checkboxFive" value="sports" />
                                        <label htmlFor="checkboxFive">Sports</label>
                                    </li>
                                    <li>
                                        <input type="checkbox" id="checkboxSix" value="music" />
                                        <label htmlFor="checkboxSix">Music</label>
                                    </li>
                                    <li>
                                        <input type="checkbox" id="checkboxSeven" value="movies" />
                                        <label htmlFor="checkboxSeven">Movies</label>
                                    </li>
                                    <li>
                                        <input type="checkbox" id="checkboxEight" value="books" />
                                        <label htmlFor="checkboxEight">Books</label>
                                    </li>
                                    <li>
                                        <input
                                            type="checkbox"
                                            id="checkboxNine"
                                            value="technology"
                                        />
                                        <label htmlFor="checkboxNine">Technology</label>
                                    </li>
                                    <li>
                                        <input type="checkbox" id="checkboxTen" value="science" />
                                        <label htmlFor="checkboxTen">Science</label>
                                    </li>
                                    <li className="ks-selected">
                                        <input
                                            type="checkbox"
                                            id="checkboxEleven"
                                            value="animals"
                                        />
                                        <label htmlFor="checkboxEleven">Animals</label>
                                    </li>
                                    <li>
                                        <input
                                            type="checkbox"
                                            id="checkboxTwelve"
                                            value="celebrities"
                                        />
                                        <label htmlFor="checkboxTwelve">Celebrities</label>
                                    </li>
                                    <li>
                                        <input type="checkbox" id="checkboxThirteen" value="news" />
                                        <label htmlFor="checkboxThirteen">News</label>
                                    </li>
                                    <li>
                                        <input
                                            type="checkbox"
                                            id="checkboxFourteen"
                                            value="general"
                                        />
                                        <label htmlFor="checkboxFourteen">General</label>
                                    </li>
                                    <li>
                                        <input
                                            type="checkbox"
                                            id="checkboxFifteen"
                                            value="smalltalk"
                                        />
                                        <label htmlFor="checkboxFifteen">Smalltalk</label>
                                    </li>
                                </ul>
                            </div>

                            <input type="submit" value="Submit" className="myButton" />
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
export default CreateEvent;
