import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Lunch = ({lunch}) => {
  
    const {name,img,price,description}=lunch;
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

export default Lunch;