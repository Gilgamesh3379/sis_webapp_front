import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BaseUrl } from './consistents';
import '../App.css';

function CoursePrograms(props) {
    const [courseprograms, setCourseprograms] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const token = "391d9011bab7b6abfe77c53a52acbabd4b911779"; // Use the generated token

        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: BaseUrl + 'management_webapp/courseprograms/',
            headers: {
                'Authorization': `Token ${token}`, // Include the token here
                'Content-Type': 'application/json',
            },
        };

        axios
            .request(config)
            .then((response) => {
                setCourseprograms(response.data);
            })
            .catch((error) => {
                setError('Error fetching course programs: ' + error.message);
                console.log('Error fetching course programs:', error);
            });
    }, []);

    return (
        <div className="CoursePrograms-container">
            <h1 className="CoursePrograms-header">Maungawhau Institute of Studies (MIS)</h1>
            <h2 className="CoursePrograms-subHeader">Course Programs</h2>
            {error && <p className="error">{error}</p>}
            <ul className="CoursePrograms-list-container">
                {courseprograms.map((courseprogram) => {
                    return <li key={courseprogram.id} className="CoursePrograms-list">{courseprogram.name}</li>;
                })}
            </ul>
        </div>
    );
}

export default CoursePrograms;
