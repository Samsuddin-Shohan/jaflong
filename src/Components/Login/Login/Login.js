import React from 'react';
import './Login.css';
import banner from '../../../assets/bannerbackground.png'
import NavBar from '../../NavBar/NavBar';
import Footer from '../../Footer/Footer';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo2.png';

const Login = () => {
    return (
        <div>
        <NavBar></NavBar>
        <div id='login'>
        <div className=' d-flex flex-column  align-items-center' id='login-form'>
            <img id='main-logo-login' src={logo} alt="" />
           
            <input id = 'form-element' type="text" name=""  placeholder='Email'/>
            <input id = 'form-element' type="text" name="" placeholder='Password'/>
            
            <button id = 'form-element'  className='btn btn-secondary'>Log In</button>
            <p className='fs-2'>or</p>
            <Link to={`/login`}>
                 <button id='login-link'  className='btn btn-outline-secondary '>Google Sign In</button>
            </Link>

        </div>
        </div>
        <Footer></Footer>

           
        </div>
    );
};

export default Login;