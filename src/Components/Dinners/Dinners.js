import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import Dinner from "../Dinner/Dinner";

const Dinners = () => {
  const [dinner, setDinner] = useState([]);
  useEffect(() => {
    fetch("/Dinner.JSON")
      .then((res) => res.json())
      .then((data) => setDinner(data));
  }, []);
  //console.log(dinner);
  return (
    <div>
      <Row xs={1} md={3} className="g-4">
        {dinner.map((dn) => (
          <Dinner key={dn.key} dinner={dn}></Dinner>
        ))}
      </Row>
    </div>
  );
};

export default Dinners;
