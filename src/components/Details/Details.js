import React from 'react';
import './Details.css';

const Details = (props) => {
    const {student,time,day,payment} = props.detail
    return (
        <div className='Details'>
            <h3>Student: {student}</h3>
            <p>Time: {time}</p>
            <p>Day: {day}</p>
            <p>Payment: {payment}</p>
        </div>
    );
};

export default Details;