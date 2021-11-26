import React from 'react';
import { Link } from 'react-router-dom';
import './Showservice.css';

const Showservice = (props) => {
    // use destructuring to add many product
    // duration, timemenu, fee
    const { servicename, image, summery, _id, cost } = props.service;
    const url = `/details/${_id}`;
    return (
        <div className="col" >
            <div className="card">
                <img className="user-image" src={image} alt="" />
                <div className="card-body">
                    <h4>{servicename}</h4>
                    <p>{summery}</p>
                    <p><strong>Package Price: {cost}</strong></p>
                    <Link to={url}>
                        <button className="btn">Book Now</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Showservice;