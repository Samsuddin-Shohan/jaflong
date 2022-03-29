import React, { useState } from 'react';
import './Login.css';
import banner from '../../../assets/bannerbackground.png'
import NavBar from '../../NavBar/NavBar';
import Footer from '../../Footer/Footer';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo2.png';
import { Form } from 'react-bootstrap';
import useFirebase from '../../../hooks/useFirebase';


const Login = () => {
    const {signUpWithGoogle}= useFirebase();
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const handleLogin = (event)=>{
        event.preventDefault();
        console.log(email);
        setEmail('');
        setPassword('');
    }

    
    return (
        <div>
        
        <NavBar></NavBar>
        <div id='login'>
        <Form className=' d-flex flex-column  align-items-center' id='login-form'>
            <img id='main-logo-login' src={logo} alt="" />
           
            <input value={email} onFocus={(e) => e.target.placeholder = ""} onBlur ={(e)=>e.target.placeholder = 'Name'}  onChange={event => setEmail(event.target.value)} id = 'form-element' type="text" name=""  placeholder='Email'/>

            <input value={password} onBlur ={(e)=>e.target.placeholder = 'Password'} onFocus={(e) => e.target.placeholder = ""}  onChange={event => setPassword(event.target.value)} id = 'form-element' type="password" name="" placeholder='Password'/>

            
            <button id = 'form-element'  className='btn btn-secondary' onClick={handleLogin}>Log In</button>
            <p className='fs-2'>or</p>
            
                 <button id='login-link'  className='btn btn-outline-secondary ' onClick={signUpWithGoogle}>Google Sign In</button>
            

        </Form>
        </div>
        <Footer></Footer>          
        </div>
    );
};

export default Login ;

