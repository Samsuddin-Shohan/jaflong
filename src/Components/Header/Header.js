import React from 'react';
import banner from '../../assets/bannerbackground.png';
import './Header.css';

const Header = () => {
    return (
        <div>
           <img id='header-banner' src={banner} alt="" />
        </div>
    );
};

export default Header;