import React, { useEffect, useState } from 'react';
import HomeInfo from '../HomeInfo/HomeInfo';
import './Home.css'

const Home = () => {
    
    const [intro,setIntro]=useState([])
    useEffect(()=>{
        fetch('./intro.JSON')
        .then(res=>res.json())
        .then(data=>setIntro(data))
    },[])
    return (
        <div className='Home'>
            
            {
                intro.map(info => <HomeInfo
                key ={info.key}
                info={info}
                ></HomeInfo>)
            }
        
        </div>
    );
};

export default Home;