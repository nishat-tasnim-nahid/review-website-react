import React, { useEffect, useState } from 'react';
import TeacherInfo from '../TeachersInfo/TeacherInfo';
import './About.css'

const About = () => {
    const [teachers,setTeachers] = useState([])
    useEffect(()=>{
        fetch('./teachers.JSON')
        .then(res=>res.json())
        .then(data => setTeachers(data))
    },[])
    return (

        <div >
            <h1>Teacher Information</h1>
           
            <div className='About'>
            {
                teachers.map(teacher => <TeacherInfo
                key={teacher.key}
                teacher={teacher}
                ></TeacherInfo>)
            }
            </div>
            
        </div>
    );
};

export default About;