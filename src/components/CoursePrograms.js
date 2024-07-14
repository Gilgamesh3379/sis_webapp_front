import React, {useEffect, useState} from 'react';
import '../App.css';
import axios from 'axios';
import { BaseUrl } from './consistents';

function CoursePrograms(props) {

    const [courseprograms, setCourseprograms] = useState([]);

    useEffect(() => {
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: BaseUrl + 'management_webapp/courseprograms/',
            headers: {},
        };

        axios.request(config)
            .then((response) => {
                console.log(JSON.stringify(response.data));
                setCourseprograms(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <div className="CoursePrograms-container">
            <h1 className="CoursePrograms-header">Maungawhau Institute of Studies (MIS)</h1>
            <h2 className="CoursePrograms-subHeader">Course Programs</h2>
            <ul className="CoursePrograms-list-container">
                {courseprograms.map((courseprogram) => {
                    return <li key={courseprogram.id} className={"CoursePrograms-list"}>{courseprogram.text}</li>
                })}
            </ul>
        </div>
    );
}

export default CoursePrograms;
