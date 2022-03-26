import React from 'react';
import NavBar from '../../NavBar/NavBar';
import logo from '../../../assets/logo2.png';
import './Registration.css';
import { Link } from 'react-router-dom';
import Footer from '../../Footer/Footer';
const Registration = () => {
    return (
        <div>
        <NavBar></NavBar>
        <div id='login'>
        <div className=' d-flex flex-column  align-items-center' id='login-form'>
            <img id='main-logo-login' src={logo} alt="" />
            <input id = 'form-element' type="text" name="" placeholder='Name'/>
            <input id = 'form-element' type="text" name=""  placeholder='Email'/>
            <input id = 'form-element' type="text" name="" placeholder='Password'/>
            <input id = 'form-element' type="text" name=""placeholder='Confirm Password'/>
            <button id = 'form-element'  className='btn btn-secondary'>Sign Up</button>
            <p className='fs-2'>or</p>
            <Link to={`/login`}>
                 <button id='login-link'  className='btn btn-outline-secondary '>Already have an account?</button>
            </Link>

        </div>
        </div>
        <Footer></Footer>

           
        </div>
    );
};

export default Registration;