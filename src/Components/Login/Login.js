// css import
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import './Login.css';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import { useState } from 'react';


const Login = () => {
    // step 11 call useFirebase and doing distructuring here
    const { signInUsingGoogle } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLogin, setIsLogin] = useState(false);
    const [error, setError] = useState('');
    const location = useLocation();
    const history = useHistory();
    const auth = getAuth();
    const redirect_uri = location.state?.from || '/home';




    const toggleLogin = e => {
        setIsLogin(e.target.checked)
    }

    const handleLogin = e => {
        console.log(email, password);
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
            })
            .catch(error => {
                setError(error.message);
            })
        e.preventDefault();
    };

    const handleEmIn = e => {
        setEmail(e.target.value);
    };
    const handleEmPas = e => {
        setPassword(e.target.value);
    };
    // login redirect after login
    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri);
            })
    }


    return (
        <div className=" container ">

            <div className="form-item mt-5 mb-5" >
                <div className="login-form">
                    <h3 className="text-primary">Please {isLogin ? 'Login' : 'Register'}</h3>
                    <form onSubmit={handleLogin}>
                        <h6 id="text">Email Address</h6>
                        <input onBlur={handleEmIn} type="email" placeholder="your email" required />
                        <br />
                        <h6 id="text" >Password</h6>
                        <input onBlur={handleEmPas} className="mt-5px" type="password" placeholder="your password" required />
                        <br />
                        <h6 id="text" className="row mb-3 text-danger">{error}</h6>
                        <h6>{ }</h6>
                        <div className="form-check">
                            <input onChange={toggleLogin} className="form-check-input" type="checkbox" id="gridCheck1" />
                            <label className="form-check-label" htmlFor="gridCheck1">
                                Already Registered?
                            </label>
                        </div>
                        <input className="btn-regular" type="submit" value="Login" />
                    </form>
                    <p>for new users? <Link to="/register">Create Account</Link></p>
                    <div>---------or------------</div>
                    <button onClick={handleGoogleLogin} className="btn">Login with Google</button>
                </div>

            </div>
        </div>
    );
};

export default Login;