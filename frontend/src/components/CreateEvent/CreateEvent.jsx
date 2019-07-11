import React, {Component} from 'react';
import * as style from './index.module.scss';
import * as buttonColors from '../Button/colors';
import Button from '../Button';
import cx from 'classnames';
import './index.scss';

class CreateEvent extends Component {
    render () {
        return (
            <div className={cx('center', 'col-lg-7', 'col-12', )}>
                <div>
                    <h1 className={style.title}>NEW EVENT</h1>

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
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="eventLocation">Location</label>
                                <input
                                    type="text"
                                    id="location"
                                    className="form-control"
                                    placeholder="Event Location"
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
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="eventDatetime">Topics</label>
                                <br />
                                <ul className="ks-cboxtags">
                                    <li>
                                        <input type="checkbox" id="checkboxOne" value="politics" />
                                        <label htmlFor="checkboxOne">Politics</label>
                                    </li>
                                    <li>
                                        <input
                                            type="checkbox"
                                            id="checkboxTwo"
                                            value="environment"
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
                            <Button
                                type="submit"
                                value="Submit"
                                color={buttonColors.GREEN}
                            >Submit</Button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
export default CreateEvent;
