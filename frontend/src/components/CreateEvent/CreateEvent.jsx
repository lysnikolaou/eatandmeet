import React, { Component } from "react";
import "./CreateEvent.scss";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

class CreateEvent extends Component {
  render() {
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
                  name={"task"}
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
                  name={"datetime"}
                  id="datetime"
                  className="form-control"
                  placeholder="Date & Time"
                />
              </div>
              <div className="form-group">
                <label htmlFor="eventSlots">Slots</label>
                <input
                  type="number"
                  name={"#members"}
                  id="#members"
                  className="form-control"
                  placeholder="Maximum Members"
                />
              </div>
              <div className="form-group">
                <label htmlFor="eventDatetime">Topics</label>
                <br />
                <ul class="ks-cboxtags">
                  <li>
                    <input type="checkbox" id="checkboxOne" value="politics" />
                    <label for="checkboxOne">Politics</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      id="checkboxTwo"
                      value="environment"
                    />
                    <label for="checkboxTwo">Environment</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      id="checkboxThree"
                      value="education"
                    />
                    <label for="checkboxThree">Education</label>
                  </li>
                  <li>
                    <input type="checkbox" id="checkboxFour" value="travel" />
                    <label for="checkboxFour">Travel</label>
                  </li>
                  <li>
                    <input type="checkbox" id="checkboxFive" value="sports" />
                    <label for="checkboxFive">Sports</label>
                  </li>
                  <li>
                    <input type="checkbox" id="checkboxSix" value="music" />
                    <label for="checkboxSix">Music</label>
                  </li>
                  <li>
                    <input type="checkbox" id="checkboxSeven" value="movies" />
                    <label for="checkboxSeven">Movies</label>
                  </li>
                  <li>
                    <input type="checkbox" id="checkboxEight" value="books" />
                    <label for="checkboxEight">Books</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      id="checkboxNine"
                      value="technology"
                    />
                    <label for="checkboxNine">Technology</label>
                  </li>
                  <li>
                    <input type="checkbox" id="checkboxTen" value="science" />
                    <label for="checkboxTen">Science</label>
                  </li>
                  <li class="ks-selected">
                    <input
                      type="checkbox"
                      id="checkboxEleven"
                      value="animals"
                    />
                    <label for="checkboxEleven">Animals</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      id="checkboxTwelve"
                      value="celebrities"
                    />
                    <label for="checkboxTwelve">Celebrities</label>
                  </li>
                  <li>
                    <input type="checkbox" id="checkboxThirteen" value="news" />
                    <label for="checkboxThirteen">News</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      id="checkboxFourteen"
                      value="general"
                    />
                    <label for="checkboxFourteen">General</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      id="checkboxFifteen"
                      value="smalltalk"
                    />
                    <label for="checkboxFifteen">Smalltalk</label>
                  </li>
                </ul>
              </div>

              <input type="submit" value="Submit" class="myButton" />
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default CreateEvent;
