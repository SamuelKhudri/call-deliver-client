import React from 'react';
import './comment.css'
const Comment = () => {
    return (
        <div id="contmar" className="container">
            <h1 id="h1provided">Our Customers Review</h1>
            <div className="row">
                <div className="col">
                    <div className="g-col-4 card border-success mb-3">
                        <div id="header" class="card-header bg-primary border-success"><h3>Kanij fatema</h3></div>
                        <div class="card-body text-success">
                            <h5 class="card-title">Review</h5>
                            <p class="card-text">Their service is just wow . we always like to have their great service. you can also take the service</p>
                            <button id="btn">profile</button>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="g-col-4 card border-success mb-3">
                        <div id="header" class="card-header bg-primary border-success"><h3>Eng Khorshed</h3></div>
                        <div class="card-body text-success">
                            <h5 class="card-title">Review</h5>
                            <p class="card-text">Their service is just wow . we always like to have their great service. you can also take the service</p>
                            <button id="btn">profile</button>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="g-col-4 card border-success mb-3">
                        <div id="header" class="card-header bg-primary border-success"><h3>Profeccor abul</h3></div>
                        <div class="card-body text-success">
                            <h5 class="card-title">Review</h5>
                            <p class="card-text">Their service is just wow . we always like to have their great service. you can also take the service</p>
                            <button id="btn"> profile</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Comment;