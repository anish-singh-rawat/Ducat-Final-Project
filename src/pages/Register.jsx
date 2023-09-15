import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react'
import { auth } from '../firebaseConfig';
import { useDispatch } from 'react-redux';
import { addUserstart } from '../redux/action/user.action';
import { Link, useNavigate } from 'react-router-dom';

let initialState = {
    name: " ",
    email: " ",
    password: "",
    confirm_password: ""
}

export default function Register() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    let [formData, setformData] = useState(initialState);
    let [error, setError] = useState(false)

    let { name, email, password, confirm_password } = formData;

    const inputChange = (event) => {
        setformData((prev) => ({
            ...prev,
            [event.target.name]: event.target.value
        }))
    }

    const submit = (event) => {
        event.preventDefault();

        // console.log(formData);
        if (formData.password === formData.confirm_password) {
            setError(false)
            createUserWithEmailAndPassword(auth, formData.email, formData.password)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    formData.uid = user.uid
                    formData.role = "customer"

                    delete formData.confirm_password
                    dispatch(addUserstart(formData))
                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                
                    setTimeout(() => {
                        navigate("/login")
                    }, 2000);
                    // ..
                });
        }
        else{
            setError(true)
        }
    }

    return (
        <div className="global-container">
            <div className="card login-form">
                <div className="card-body">
                    <h3 className="card-title text-center">Register</h3>
                    <div className="card-text">
                        {
                            error &&  <p className='text-danger'> Password does not mateched </p>
                        }
                       
                        <form className="authentication" onSubmit={submit}>

                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input type="text" className="form-control form-control-sm"
                                    value={name} onChange={inputChange}
                                    id="name" name='name' aria-describedby="emailHelp" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Email address</label>
                                <input type="email" className="form-control form-control-sm"
                                    value={email} onChange={inputChange}
                                    id="email" name='email' aria-describedby="emailHelp" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input type="password" className="form-control form-control-sm"
                                    value={password} 
                                    onChange={inputChange}
                                    name="password"
                                    id="password" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="confirm_password">Confirm Password</label>
                                <input type="password" className="form-control form-control-sm"
                                    value={confirm_password} onChange={inputChange}
                                    id="confirm_password" name='confirm_password' />
                            </div>

                            <button type="submit" className="btn btn-auth btn-primary btn-block">Sign in</button>

                            <div className="sign-up">
                                Do you have an account? <Link to="/register">sign In</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
