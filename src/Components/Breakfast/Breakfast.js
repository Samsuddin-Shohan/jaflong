import React from "react";
import { Card, Col } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const Breakfast = ({ breakfast }) => {
  const { name, img, price, description, key } = breakfast;
  const history = useHistory();
  const handleAddToSingleItem = (id) => {
    console.log("clicked");
    history.push(`/singleitem/${id}`);
  };
  return (
    <Col onClick={() => handleAddToSingleItem(key)}>
      <Card className="border border-0 text-center">
        <Card.Img variant="top" src={img} className="w-75 mx-auto" />
        <Card.Body>
          <Card.Title className="overflow-hidden">{name}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Card.Title className="overflow-hidden">{price}</Card.Title>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Breakfast;
