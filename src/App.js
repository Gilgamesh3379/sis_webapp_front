import React, { useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import CoursePrograms from './components/CoursePrograms';
import Home from './components/Home';
import TopBar from './components/TopBar';
import './App.css';

const App = () => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        setUser(null);
        navigate('/login');
    };

    return (
        <div className="App">
            <TopBar user={user} onLogout={handleLogout} />
            <Routes>
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login setUser={setUser} />} />
                <Route path="/courseprograms" element={<CoursePrograms />} />
                <Route path="/" element={<Home />} />
            </Routes>
        </div>
    );
};

export default App;
