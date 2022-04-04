import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Breakfast from '../Breakfast/Breakfast';

const Breakfasts = () => {
    const [breakfast,setBreakfast]=useState([]);
    useEffect(()=>{
        fetch('/breakfast.JSON')
        .then(res=>res.json())
        .then(data => setBreakfast(data))
    },[])
    console.log(breakfast);
    
    return (
        <div>
           
           
           <Row xs={1} md={3} className="g-4">
           {
                breakfast.map(bf =>
                    <Breakfast 
                    key={bf.key}
                    breakfast = {bf}
                    ></Breakfast>
                )
            }
           </Row>
            
           
        </div>
    );
};

export default Breakfasts;