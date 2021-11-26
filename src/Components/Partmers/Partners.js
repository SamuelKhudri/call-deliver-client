import React from 'react';

import './Partmers.css'

import part1 from '../Image/part1-swggy.png';
import part2 from '../Image/part2-zommato.jpg';
import part3 from '../Image/part3-ubeats.png';
import part4 from '../Image/part4-fodpanda.png';
const Partners = () => {
    return (
        <div className="container back-part mt-5">
            <h1 id="h1provided" >Our partners</h1>
            <div className="row">
                <div className="col-12 col-lg-3 col-md-6">
                    <img id="img-size" className="img-fluid m-3 " src={part1} alt="" />
                </div>
                <div className="col-12 col-lg-3 col-md-6">
                    <img id="img-size" className="img-fluid m-3" src={part2} alt="" />
                </div>
                <div className="col-12 col-lg-3 col-md-6">
                    <img id="img-size" className="img-fluid m-3" src={part3} alt="" />
                </div>
                <div className="col-12 col-lg-3 col-md-6">
                    <img id="img-size" className="img-fluid m-3" src={part4} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Partners;