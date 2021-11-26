import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
// import hook--
import { useForm } from 'react-hook-form';
// import { Link } from 'react-router-dom';
import './PlaceOrder.css';
import useAuth from '../hooks/useAuth';

const PlaceOrder = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { user } = useAuth();
    // above part we get the use auth hook form
    const { servicesid } = useParams()
    const [services, setServices] = useState();
    // const [selected, setSelected] = useState();


    useEffect(() => {
        fetch('https://fierce-springs-23134.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])

    const details = services?.find(service => service._id == servicesid)
    // console.log(service)
    // const orderid = JSON.stringify({details?._id})

    // -------on submit function-------
    const onSubmit = data => {
        // const savedCart = getStoredCart();
        // data.order = savedCart;
        console.log(data);
        fetch('https://fierce-springs-23134.herokuapp.com/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Successfully added the user.')
                    reset()
                }
            })
    };
    return (
        <div className="container" >
            <h1>Your Order View</h1>
            <section className="mt-3">
                <div className="row">
                    <div className="col">
                        <div className="card">
                            <h4>Your selection: {details?._id} </h4>
                            <h4>Your Email: {user.email} </h4>
                            <div className="card-body">
                                <img className="user-img" src={details?.image} alt="" />
                                <h4>ServiceName: {details?.servicename}</h4>
                                <p> {details?.summery}</p>
                                <p>Time: {details?.duration}</p>
                                <p>Package: {details?.item}</p>
                                <p>Origin: {details?.origin}</p>
                                <p>Cost: {details?.cost}</p>
                                <Link to={'/myorder'}>
                                    <button className="btn">View Your Order</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*-------place order form start from here----------*/}
            <section className="mt-5">
                <div className="row">
                    <h1 className="h1provided">Place your Order</h1>
                    <div className="col mt-3">
                        <div className="card">
                            <div className="card-body">
                                <form className="shipping-form" onSubmit={handleSubmit(onSubmit)}>
                                    <h4>Your email</h4>
                                    <input defaultValue={user.email} {...register("email", { required: true })} />
                                    {errors.email && <span className="error">This field is required</span>}
                                    <h4>Your name</h4>
                                    <input defaultValue={user.displayName} {...register("name")} />
                                    <h4 className="text">Service name</h4>
                                    <input type="text" name="" id="" defaultValue={details?.servicename} {...register("service", { required: true })} />
                                    <h4 className="text">Your ordered id</h4>
                                    <input type="text" name="" id="" defaultValue={details?._id} {...register("orderid", { required: true })} />
                                    <h4>Your Shipping address</h4>
                                    <input placeholder="Address" defaultValue="" {...register("address")} />
                                    <h4>Your city</h4>
                                    <input placeholder="City" defaultValue="" {...register("city")} />
                                    <h4>Your number</h4>
                                    <input placeholder="phone number" defaultValue="" {...register("phone")} />

                                    <input className="btn" type="Submit" />
                                    <p>Please click 3 times carefully</p>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>

            </section>

        </div>
    );
};

export default PlaceOrder;