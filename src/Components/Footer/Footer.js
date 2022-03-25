import React from 'react';
import './Footer.css';
import logo2 from  '../../assets/logo2.png';

const Footer = () => {
    return (
        <div className='bg-dark text-light  row' id='footer' >
            <div className='col-6 ps-5 d-flex flex-column justify-content-between'>
                <img id='side-logo' src={logo2} alt="" />
                <p>Copyright @ 2020 Online food </p>
            </div>
            <div className='col-3 lh-1'>
                <p>About Online food</p>
                <p>Read our blog</p>
                <p>Sign up to deliver</p>
                <p>Add your Restaurant</p>
                <p>Privacy Policy</p>
                <p>Terms of use</p>
            </div>
            <div className='col-3 lh-1'>
                <p>Get help</p>
                <p>Read FAQs</p>
                <p>View all cities</p>
                <p>Restaurants near me</p>
                <p>Pricing</p>
            </div>
        </div>
    );
};

export default Footer;