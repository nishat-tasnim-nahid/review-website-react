import React from 'react';
import './HomeInfo.css'

const HomeInfo = (props) => {
    const { yearName, course, img, subNum } = props.info
    return (
        <div className='Homeinfo'>
            <img src={img} alt="" />
            <h2>Year-Name: {yearName}</h2>
            <h3>Course-Name: {course}</h3>
            <h4>Subjects:{subNum}</h4>

        </div>
    );
};

export default HomeInfo;