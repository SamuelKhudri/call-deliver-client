import React from 'react';
import axios from 'axios';
import './AddSer.css';
import { useForm } from "react-hook-form";


const AddService = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data);

        axios.post('https://fierce-springs-23134.herokuapp.com/services', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added successfully');
                    reset();
                }
            })
    }

    return (
        <div className="container" >
            <div className="add-service">
                <h2>Please Add a Service</h2>
                <form id="formcolor" className="mt-5" onSubmit={handleSubmit(onSubmit)}>
                    <input className="mt-3" {...register("servicename", { required: true, maxLength: 30 })} placeholder="service name" />
                    <textarea {...register("summery")} placeholder="summery" />
                    <textarea {...register("item")} placeholder="item" />
                    <input type="text" name="" {...register("origin")} placeholder="food origin" />
                    <input type="text" name="" {...register("duration")} placeholder="delivery time" />
                    <input type="number" {...register("cost")} placeholder="price" />
                    <input {...register("image")} placeholder="image url" />
                    <input className="btn" type="submit" />
                </form>
            </div>

        </div>
    );
};

export default AddService;