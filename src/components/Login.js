// Login.js
import React, { useState } from 'react';
import axios from 'axios';
import { BaseUrl } from './consistents';
import '../App.css';

function Login({ setUser }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loginStatus, setLoginStatus] = useState('');

    function usernameHandler(e) {
        setUsername(e.target.value);
    }

    function passwordHandler(e) {
        setPassword(e.target.value);
    }

    function login(e) {
        // const token = localStorage.getItem('token');
        e.preventDefault();
        let data = JSON.stringify({
            'username': username,
            'password': password,
        });

        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: BaseUrl + 'auth/token/', // Ensure this matches the Django URL configuration
            headers: {
                'Content-Type': 'application/json',
                // 'Authorization': `${token}`,
            },
            data: data,
        };

        axios
            .request(config)
            .then((response) => {
                const token = response.data.access; // Use response.data.access for JWT
                localStorage.setItem('token', token); // Store the token
                setUser({ username: username });
                setLoginStatus('Logged in Successfully!');
            })
            .catch((error) => {
                console.log(error);
                setLoginStatus('Username or Password is incorrect!');
            });
    }

    return (
        <div className="Login-container">
            <h1 className="Login-header">MIS Login Page</h1>
            <div className="Login-form">
                <p>
                    <label htmlFor="username">Username</label>
                    <input id="username" type="text" onChange={usernameHandler} />
                </p>
                <p>
                    <label htmlFor="password">Password</label>
                    <input id="password" type="password" onChange={passwordHandler} />
                </p>
                <p>
                    <button id="loginbtn" onClick={login}>Login</button>
                </p>
            </div>
            <p id="login_status" className="Login-status">{loginStatus}</p>
        </div>
    );
}

export default Login;
