import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo2.png';
import useAuth from '../../hooks/useAuth';
import './NavBar.css'

const NavBar = () => {
    const {user,logOut}= useAuth();
    return (
        <div id='navbar' >
        <div  className='my-3 d-flex justify-content-between align-items-center'>
        <div className='ms-5'>
         <Link to={`/`}>
             <img id='main-logo' src={logo} alt="" />
         </Link>
        </div>
        <div className='me-5'>
        {user.email && <p className='mx-2 d-inline'>{user.displayName}</p>}
         {user.email? <button className='btn btn-outline-secondary mx-2 fw-bolder text-dark' onClick={logOut}>Logout</button> :<Link to={`/login`}>
             <button className='btn btn-outline-secondary mx-2 fw-bolder text-dark'>Login</button>
         </Link>}
         <Link to={`/signup`}>
             <button className='btn btn-secondary mx-2'>Sign Up</button>
         </Link>
        </div>
     </div>
        </div>
    );
};

export default NavBar;