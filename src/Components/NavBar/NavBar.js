import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo2.png';
import './NavBar.css'

const NavBar = () => {
    return (
        <div className='my-3 d-flex justify-content-between align-items-center'>
           <div className='ms-5'>
            <Link to={`/`}>
                <img id='main-logo' src={logo} alt="" />
            </Link>
           </div>
           <div className='me-5'>
            <Link to={`/login`}>
                <button className='btn btn-secondary-outline mx-2 fw-bolder text-warning'>Login</button>
            </Link>
            <Link to={`/signup`}>
                <button className='btn btn-secondary mx-2'>Sign Up</button>
            </Link>
           </div>
        </div>
    );
};

export default NavBar;