import React from 'react';
import notFound from '../../assets/404.jpg'
import Footer from '../Footer/Footer';
import NavBar from '../NavBar/NavBar';
import './NotFound.css';

const NotFound = () => {
    return (
        <div>
            <NavBar></NavBar>
            <img id='notfound-img' src={notFound} alt="" />
            <Footer></Footer>
        </div>
    );
};

export default NotFound;