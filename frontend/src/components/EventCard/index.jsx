import React, {Component} from 'react';
import './index.scss';
import {Link} from "react-router-dom";


class EventCard extends Component {

    constructor(props) {
        super(props);
        this.formatDate = this.formatDate.bind(this);
    }

    formatDate(time){
        let date = new Date(time);
        return(`${date.getDate()}.${date.getMonth()}.${date.getFullYear()} - ${date.getHours()}:${date.getMinutes()}`)
    }


    render() {
        const {item} = this.props;
        return (
            <div className="card mb-3 eventCard">
                <figure>
                    <img className="card-img-top" src={item.img} alt="Card image" />
                </figure>
                <div className="card-body">
                    <h6 className="card-title title">{item.title}</h6>
                    <div>
                        <a href={`https://maps.google.com/?q=${item.location}`} className="link-white-bg">@{item.location}</a>
                    </div>
                    <div>
                        {this.formatDate(item.time)}
                    </div>
                    <div>
                        <Link to={'someplace/'+item.id}>More...</Link>
                    </div>
                </div>
                <div className="card-footer">
                    <div className="row">
                        <div className="col-7">
                            RVSP: {item.participant.coming} / {item.participant.limit}
                        </div>
                        <div className="col-5">

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default EventCard;
