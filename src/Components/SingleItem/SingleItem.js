import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";
import "./SingleItem.css";

const SingleItem = () => {
  const { id } = useParams();
  const [meal, setMeal] = useState([]);
  useEffect(() => {
    fetch("/AllFood.JSON")
      .then((res) => res.json())
      .then((data) => setMeal(data));
  }, []);
  //console.log(meal);
  const item = meal.find((singleMeal) => singleMeal.key === id);
  console.log(item);

  return (
    <div>
      <NavBar></NavBar>
      <div className="row">
        <div className="col-6">
          <h1>{item?.name}</h1>
          <p>{item?.price}</p>
          <p>{item?.longDescription}</p>
        </div>
        <div className="col-6">
          <img className="w-75" src={item?.img} alt="" />
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default SingleItem;
