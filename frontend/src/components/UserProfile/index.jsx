import React, {Component} from 'react';
import './index.css';

class ProfilePage extends Component {
    render () {
        return (
            <div className="card">
                <div className="card-body">
                    <div className="container emp-profile">
                        <form method="post">
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="profile-img">
                                        <img
                                            src="https://scontent-dus1-1.xx.fbcdn.net/v/t31.0-8/21273280_1869007506448034_8133580273270929214_o.jpg?_nc_cat=105&_nc_ht=scontent-dus1-1.xx&oh=b8cacb7402c7d2745280b584f48f30c7&oe=5D5DAADA"
                                            alt=""
                                        />
                                        <div className="file btn btn-lg btn-primary">
                      Change Photo
                                            <input type="file" name="file" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="profile-head">
                                        <h5>Dimitris Prevezianos</h5>
                                        <h6>Web Developer and Designer</h6>
                                        <p className="proile-rating">
                      EVENTS : <span>5</span>
                                        </p>
                                        <ul className="nav nav-tabs" id="myTab" role="tablist">
                                            <li className="nav-item">
                                                <a
                                                    className="nav-link active"
                                                    id="home-tab"
                                                    data-toggle="tab"
                                                    href="/"
                                                    role="tab"
                                                    aria-controls="home"
                                                    aria-selected="true"
                                                >
                          About
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a
                                                    className="nav-link"
                                                    id="profile-tab"
                                                    data-toggle="tab"
                                                    href="#profile"
                                                    role="tab"
                                                    aria-controls="profile"
                                                    aria-selected="false"
                                                >
                          Timeline
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-2">
                                    <input
                                        type="submit"
                                        className="profile-edit-btn"
                                        name="btnAddMore"
                                        value="Edit Profile"
                                    />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="profile-work">
                                        <p>PROFILES</p>
                                        <a href="facebook.com">Facebook Link</a>
                                        <br />
                                        <a href="twirtter.com">Twitter Profile</a>
                                        <br />
                                        <a href="instagram.com">Instagram Profile</a>
                                        <p>INTERESTS</p>
                                        <a href="sports.com">Sports</a>
                                        <br />
                                        <a href="science.com">Science</a>
                                        <br />
                                        <a href="politics.com">Politics</a>
                                        <br />
                                        <a href="Environment.com">Environment</a>
                                        <br />
                                    </div>
                                </div>
                                <div className="col-md-8">
                                    <div className="tab-content profile-tab" id="myTabContent">
                                        <div
                                            className="tab-pane fade show active"
                                            id="home"
                                            role="tabpanel"
                                            aria-labelledby="home-tab"
                                        >
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <label>User Id</label>
                                                </div>
                                                <div className="col-md-6">
                                                    <p>dprev95</p>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <label>Name</label>
                                                </div>
                                                <div className="col-md-6">
                                                    <p>Dimitris Prevezianos</p>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <label>Email</label>
                                                </div>
                                                <div className="col-md-6">
                                                    <p>dimitrisxiii@gmail.com</p>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <label>Phone</label>
                                                </div>
                                                <div className="col-md-6">
                                                    <p>123 456 7890</p>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <label>Major Studies</label>
                                                </div>
                                                <div className="col-md-6">
                                                    <p>Computer Science BSc</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="tab-pane fade"
                                            id="profile"
                                            role="tabpanel"
                                            aria-labelledby="profile-tab"
                                        />
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProfilePage;
