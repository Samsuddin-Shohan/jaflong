import React from 'react';
import { FormControl, InputGroup } from 'react-bootstrap';
import banner from '../../assets/bannerbackground.png';
import './Header.css';

const Header = () => {
    return (
        <div id='header' className='d-flex justify-content-center align-items-center flex-column'>
        <h1 className='mb-4 display-4 fw-bolder'>Best Food Waiting for your belly</h1>
        <div>
        <InputGroup className="mb-3">
        <FormControl
          placeholder="Search food items"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <InputGroup.Text id="basic-addon2" className='bg-warning'>Search</InputGroup.Text>
      </InputGroup>
        </div>
        

        </div>
    );
};

export default Header;