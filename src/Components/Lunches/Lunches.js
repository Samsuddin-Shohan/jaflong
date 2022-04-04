import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Lunch from '../Lunch/Lunch.js';

const Lunches = () => {
    const [lunch,setLunch]=useState([]);
    useEffect(()=>{
        fetch('/Lunch.JSON')
        .then(res=>res.json())
        .then(data => setLunch(data))
    },[])
    console.log(lunch);
    
    return (
        <div>
        <Row xs={1} md={3} className="g-4">
            {
                lunch.map(ln =>                     
                    <Lunch
                        key={ln.key}
                        lunch = {ln}
                    ></Lunch>
                )
            }
        </Row>
        </div>
    );
};

export default Lunches;