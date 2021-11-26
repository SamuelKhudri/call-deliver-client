import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <div className="container">
            <div className="banner-area">
                <div className=" row content area">
                    <div className=" col content">
                        <div className="">
                            <h1>Delivery-Your-Food</h1>
                            <p>"We Provide You The best Service and Food"</p>
                            <button className="btn">Rate Us</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;