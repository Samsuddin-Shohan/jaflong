import React from 'react';
import FoodSection from '../FoodSection/FoodSection';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import NavBar from '../NavBar/NavBar';

const Home = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Header></Header>
            <FoodSection></FoodSection>
            <Footer></Footer>
        </div>
    );
};

export default Home;