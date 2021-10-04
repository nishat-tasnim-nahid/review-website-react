import React from 'react';
import './Nabvar.css'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='Navbar'>
            <NavLink className='link' to='/home'>Home</NavLink>
            <NavLink className='link' to='/about'>About</NavLink>
            <NavLink className='link' to='/service'>Service</NavLink>
            <NavLink className='link' to='/benifits'>Benifits</NavLink>
            
        </div>
    );
};

export default Navbar;