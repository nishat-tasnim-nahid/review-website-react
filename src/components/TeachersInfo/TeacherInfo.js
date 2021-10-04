import React from 'react';
import './TeacherInfo.css'

const teacherInfo = (props) => {
    const{name,proffesion,status,institution} = props.teacher
    return (
        <div className='TeacherInfo'>
            <h2>Name: {name}</h2>
            <h4>Proffesion: {proffesion}</h4>
            <p>Status: {status}</p>
            <p>Institution: {institution}</p>
        </div>
    );
};

export default teacherInfo;