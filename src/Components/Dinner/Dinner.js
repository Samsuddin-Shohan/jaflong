import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Dinner = ({dinner}) => {
    
        const {name,img,price,description}=dinner;
        console.log(img);
    return (
        <Col>
        <Card>
          <Card.Img variant="top" src={img} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>
              {description}
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    );
    
};

export default Dinner;