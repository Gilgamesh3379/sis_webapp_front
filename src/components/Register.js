import React, { useState } from 'react';
import axios from 'axios';
import { BaseUrl } from './consistents'; // Ensure this path is correct
import '../App.css';

function Register() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [profileType, setProfileType] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [marks, setMarks] = useState('');
    const [program, setProgram] = useState('');
    const [courses, setCourses] = useState([]);
    const [registerStatus, setRegisterStatus] = useState('');

    const handleRegister = (e) => {
        e.preventDefault();

        const userData = {
            username: username,
            password: password,
            email: email,
            first_name: firstName,
            last_name: lastName,
            profile_type: profileType,
            name: name,
            phone: phone,
            address: address,
            marks: marks,
            courses: courses,
            program: program,
        };

        axios.post(`${BaseUrl}auth/register/`, userData, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => {
            setRegisterStatus('Registration Successful!');
        })
        .catch(error => {
            console.error('There was an error!', error.response);
            setRegisterStatus(`Registration Failed: ${error.response?.data?.detail || 'Unknown error'}`);
        });
    };

    return (
        <div className="Register-container">
            <h1 className="Register-header">MIS Registration Page</h1>
            <form className="Register-form" onSubmit={handleRegister}>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input id="username" type="text" className="form-control" value={username} onChange={e => setUsername(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input id="password" type="password" className="form-control" value={password} onChange={e => setPassword(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input id="email" type="email" className="form-control" value={email} onChange={e => setEmail(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="firstName">First Name</label>
                    <input id="firstName" type="text" className="form-control" value={firstName} onChange={e => setFirstName(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="lastName">Last Name</label>
                    <input id="lastName" type="text" className="form-control" value={lastName} onChange={e => setLastName(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="profileType">Profile Type</label>
                    <select id="profileType" className="form-control" value={profileType} onChange={e => setProfileType(e.target.value)}>
                        <option value="">Select Profile Type</option>
                        <option value="student">Student</option>
                        <option value="lecturer">Lecturer</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input id="name" type="text" className="form-control" value={name} onChange={e => setName(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Phone</label>
                    <input id="phone" type="text" className="form-control" value={phone} onChange={e => setPhone(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="address">Address</label>
                    <input id="address" type="text" className="form-control" value={address} onChange={e => setAddress(e.target.value)} />
                </div>
                {profileType === 'student' && (
                    <>
                        <div className="form-group">
                            <label htmlFor="marks">Marks</label>
                            <input id="marks" type="number" className="form-control" value={marks} onChange={e => setMarks(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="courses">Courses</label>
                            <input id="courses" type="text" className="form-control" value={courses} onChange={e => setCourses(e.target.value.split(',').map(course => parseInt(course.trim())))} placeholder="Enter course IDs separated by commas" />
                        </div>
                    </>
                )}
                {profileType === 'lecturer' && (
                    <div className="form-group">
                        <label htmlFor="program">Program</label>
                        <input id="program" type="number" className="form-control" value={program} onChange={e => setProgram(e.target.value)} />
                    </div>
                )}
                <button type="submit" className="btn btn-primary">Register</button>
            </form>
            <p id="register_status" className="Register-status">{registerStatus}</p>
        </div>
    );
}

export default Register;
