import React, {useEffect, useState} from 'react';
import data from "bootstrap/js/src/dom/data";
import {BaseUrl} from "./consistents";
import axios from "axios";

function CoursePrograms(props) {

    const [courseprograms, setCourseprograms] = useState([])
    useEffect(() => {
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: BaseUrl + 'management_webapp/courseprograms/',
            headers: {},
            data: data
        };

        axios.request(config)
            .then((response) => {
                console.log(JSON.stringify(response.data));
                setCourseprograms(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    })

    return (
        <div>
            <h1>Maungawhau Institute of Studies (MIS)</h1>
            <h2>Course Programs</h2>
            <ul>
                {courseprograms.map((courseprogram) => {
                    return <li key={courseprogram.id}>{courseprogram.text}</li>
                })}
            </ul>
        </div>
    );
}

export default CoursePrograms;