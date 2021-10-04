import React, { useEffect, useState } from 'react';
import './Service.css'
import Details from '../Details/Details';

const Service = () => {
    const [details, setDetails] = useState([])
    useEffect(() => {
        fetch('./sevice.JSON')
            .then(res => res.json())
            .then(data => setDetails(data))
    }, [])
    return (
        <div style={{backgroundColor: "whitesmoke"}}>
            <h1>Details</h1>
            <div className='Service'>
                {
                    details.map(detail => <Details
                        key={detail.key}
                        detail={detail}
                    ></Details>)
                }
            </div>

        </div>
    );
};

export default Service;