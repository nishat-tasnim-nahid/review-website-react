import React from 'react';
import './Header.css'
import Navbar from '../Navbar/Navbar';

const Header = () => {
    return (
        <div className='Header'>
           
            <Navbar></Navbar>
             <h1>Enjoy and Learn your STATISTICS with us</h1>
             <p>Statistics is the science which deals with method of collection,classifying,presenting,comparing,interpretating numerical data coolected to throw some light on any sphere.--Sellingman</p>
        </div>
    );
};

export default Header;