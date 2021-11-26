import React from 'react';
import './Footer.css';
// import logo----
import logo from '../images/logo.jpg';
import payment from '../images/footer pay.PNG';
// import fon awesome---
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMobile, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
const element1 = <FontAwesomeIcon icon={faMobile} />
const element2 = <FontAwesomeIcon icon={faEnvelope} />
const element3 = <FontAwesomeIcon icon={faPhone} />
// const element4 = <FontAwesomeIcon icon={} />


const Footer = () => {
    return (
        <div className="container">
            <div className="main-footer bg-dark" >
                <div className="container text-md-left">
                    <img id="imglogo" src={logo} alt="" />
                    <div className="row">
                        <div id="divH" className="col-md-4 col-sm-6 mb-4 ">
                            <h4 >QUICK LINKS</h4>
                            <ul id="licolor" className="list-unstyled" >
                                <li>About</li>
                                <li>Services</li>
                                <li>Partners</li>
                                <li>Contact</li>
                            </ul>
                        </div>
                        <div id="divH" className="col-md-4 col-sm-6 mb-4">
                            <h4>Contact us {element1}</h4>
                            <ul id="licolor" className="list-unstyled" >
                                <li>Email: {element2} https://deliveryfood1111@email.com</li>
                                <li>Phone: {element3} +8801962541213</li>
                                <li>Branh Contact: {element3} 091654754</li>
                            </ul>
                        </div>
                        <div id="divH" className="col-md-4 col-sm-6 mb-4">
                            <h4>Get In Touch</h4>
                            <ul id="licolor" className="list-unstyled" >
                                <li></li>
                                <li></li>
                                <li></li>
                            </ul>
                            <img id="img-size" src={payment} alt="" />
                        </div>
                        <div className="footer-bottom">
                            <p id="rightreser" className="text-xs-center">
                                &copy;{new Date().getFullYear()} Authority@- All Rights Reserved
                            </p>
                            <p id="rightreser">Term Condition || Privacy</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;