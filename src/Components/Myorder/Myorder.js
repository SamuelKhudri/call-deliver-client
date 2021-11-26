import React, { useEffect, useState } from 'react';

import './myorder.css';
// import font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMobile, faEnvelope, } from '@fortawesome/free-solid-svg-icons'
const element1 = <FontAwesomeIcon icon={faMobile} />
const element2 = <FontAwesomeIcon icon={faEnvelope} />
const Myorder = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://fierce-springs-23134.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, []);

    // handle delete function
    const handleDelUser = id => {
        const proceed = window.confirm('Are you want to delete?');
        if (proceed) {
            const url = `https://fierce-springs-23134.herokuapp.com/orders/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted successfully')

                        const remainUser = users.filter(user => user._id !== id);
                        setUsers(remainUser);
                    }
                })
        }
    }
    return (
        <div className="container">
            <div className='pt-5 services-section row'>
                <h1 className='mx-auto ser' >View Your Orders</h1>

                {
                    users.map(user => <div
                        className="col-lg-4 col-md-6  service-item"
                        key={user.id}

                    >
                        <div class="card mt-5">
                            <div class="card-body">
                                <h5 class="card-title">name: {user.name}</h5>
                                <h4 class="card-title">orderId: {user.orderid}</h4>
                                <h4 class="card-title">userEmail: {user.email}</h4>
                                <p class="card-text">{element2} {user.address}</p >
                                <p class="card-text">{user.city}</p >
                                <p>{element1} {user.phone}</p >
                            </div>
                        </div>
                        <button className="btn" onClick={() => handleDelUser(user._id)} >Cancel</button>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Myorder;