import { signInWithEmailAndPassword } from 'firebase/auth';
import React from 'react'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../firebaseConfig';

let initialState = { email: "", password: "" }

export default function Login() {
    const navigate = useNavigate()
    let [formData, setformData] = useState(initialState);

    let { email, password } = formData;

    const inputChange = (event) => {
        setformData((prev) => ({
            ...prev,
            [event.target.name]: event.target.value
        }))
    }
    const submit = (event) => {
        event.preventDefault();
        // console.log(formData);

        signInWithEmailAndPassword(auth, formData.email, formData.password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                navigate("/admin/profile")
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });
    }

    return (
        <div className="global-container">
            <div className="card login-form">
                <div className="card-body">
                    <h3 className="card-title text-center">Log in</h3>
                    <div className="card-text">
                        <form className="authentication" onSubmit={submit}>
                            <div className="form-group">
                                <label htmlFor="email">Email address</label>

                                <input type="email" className="form-control form-control-sm" name='email'
                                    value={email} onChange={inputChange} id="email" aria-describedby="emailHelp" />

                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input type="password" className="form-control form-control-sm"
                                    onChange={inputChange} value={password} name='password' id="password" />
                            </div>
                            <button type="submit" className="btn btn-auth btn-primary btn-block">Sign in</button>

                            <div className="sign-up">
                                Don't have an account? <Link to="/login">Create One</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    )
}
