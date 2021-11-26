import { getAuth, createUserWithEmailAndPassword, } from "firebase/auth";
import React, { useState } from 'react';
import './Register.css'
import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
// import useFirebase from '../useFirebase/useFirebase';

const Register = () => {
    // const { signInUsingGoogle } = useFirebase();
    const { signInUsingGoogle } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const auth = getAuth();
    const handleRegEmIn = e => {
        setEmail(e.target.value);
    };
    const handleRegPas = e => {
        setPassword(e.target.value);
    }

    const handleRegister = e => {
        e.preventDefault();
        console.log(email, password);
        if (password.length < 6) {
            setError('Password Must be at least 6 characters long.')
            return;
        }
        if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
            setError('Password Must contain 2 upper case');
            return;
        }
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
            })
            .catch(error => {
                setError(error.message);
            })
    }

    return (
        <div className=" container ">
            <div className="form-item mt-5 mb-5 row " >

                <div className="login-form">
                    <h2> Create Account</h2>
                    <form className="col" onSubmit={handleRegister}>
                        <h6 id="text">Email Address</h6>
                        <input onBlur={handleRegEmIn} type="email" name="" id="" placeholder="your email" />
                        <br />
                        <h6 id="text" >Password</h6>
                        <input onBlur={handleRegPas} type="password" name="" id="" placeholder="your password" />
                        <br />
                        {/* <h6 id="text" >Re enter Password</h6>
                        <input type="password" name="" id="" placeholder="re enter password" />
                        <br /> */}
                        <h6 id="text" className="row mb-3 text-danger">{error}</h6>
                        <h6>{ }</h6>
                        <input className="btn-regular" type="submit" value="SignUp" />
                    </form>
                    <p>Already have an Account? <Link to="/login">Go login page</Link></p>
                    <div>-------or------</div>
                    <button onClick={signInUsingGoogle} className="btn">Login with Google</button>
                </div>


            </div>
            {/* step 5 completed step six create register route */}
        </div>
    );
};

export default Register;