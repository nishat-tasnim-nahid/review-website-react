import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer-container'>
            <h1>Want to partner with us?</h1>
            <p>If you are interested in our course and benifits and you would like to find out more information, <br />
                our colleagues are ready to help you  :)</p>
            <button>Get Started</button>

            <div className='Footer'>
                <div>
                    <h2>Address</h2>
                    <p>House NE (C) #2, Road #71, NewMarket, Dhaka.</p>
                </div>
                <div>
                    <h2>About</h2>
                    <p>Our work <br />Our reputation</p>
                </div>
                <div>
                    <h2>Telephone</h2>
                    <p>01234566578 , 01386403696</p>
                    <p></p>
                </div>
            </div>

        </div>
    );
};

export default Footer;