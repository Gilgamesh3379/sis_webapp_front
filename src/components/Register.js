import React, { useState } from 'react';
import axios from 'axios';
import { BaseUrl } from './consistents';
import '../App.css';

function Register() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [registerStatus, setRegisterStatus] = useState('');

    function usernameHandler(e) {
        setUsername(e.target.value);
    }

    function passwordHandler(e) {
        setPassword(e.target.value);
    }

    function emailHandler(e) {
        setEmail(e.target.value);
    }

    function register(e) {
        e.preventDefault();
        let data = JSON.stringify({
            'username': username,
            'password': password,
            'email': email,
        });

        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: BaseUrl + 'auth/users/',
            headers: {
                'Content-Type': 'application/json',
            },
            data: data,
        };

        axios
            .request(config)
            .then((response) => {
                setRegisterStatus('Registration Successful!');
            })
            .catch((error) => {
                console.log(error);
                setRegisterStatus('Registration Failed!');
            });
    }

    return (
        <div className="Register-container">
            <h1 className="Register-header">MIS Registration Page</h1>
            <form className="Register-form" onSubmit={register}>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input id="username" type="text" className="form-control" onChange={usernameHandler} />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input id="password" type="password" className="form-control" onChange={passwordHandler} />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input id="email" type="email" className="form-control" onChange={emailHandler} />
                </div>
                <button type="submit" className="btn btn-primary">Register</button>
            </form>
            <p id="register_status" className="Register-status">{registerStatus}</p>
        </div>
    );
}

export default Register;
