import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './UpdU.css';

const UpdatedUser = () => {
    const [user, setUser] = useState({})
    const { id } = useParams();

    // show information update using id
    useEffect(() => {
        const url = `https://fierce-springs-23134.herokuapp.com/orders/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setUser(data))
    }, []);
    // input name function take
    const hanNameChange = e => {
        const updateName = e.target.value;
        const updateUser = { name: updateName, address: user.address }
        // console.log(e.target.value);
        setUser(updateUser);
    }
    // handle change email input
    const hanAddressChange = e => {
        const updateAddress = e.target.value;
        // const updateUser = { ...user };
        const updateUser = { name: user.name, address: updateAddress }
        setUser(updateUser);
    }
    // update user function handle
    const handleUpdataUser = e => {
        const url = `https://fierce-springs-23134.herokuapp.com/orders/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('Update Successful');
                    setUser({});
                    e.target.reset();
                }
            })
        e.preventDefault();
    }
    return (
        <div>
            <h1 id="h1provided"> User Name: {user.name}</h1>
            <h2 id="h1provided">User Id: {id}</h2>
            <div className="form-update w-50 mx-auto">
                <form onSubmit={handleUpdataUser}>
                    <input className="p-2 m-3" type="text" onChange={hanNameChange} value={user.name} /><br />
                    <input className="p-2 m-3" type="text" onChange={hanAddressChange} value={user.address} /><br />
                    <input className="btn" type="submit" value="submit" />
                </form>
            </div>
        </div>
    );
};

export default UpdatedUser;