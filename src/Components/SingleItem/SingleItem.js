import React from "react";
import { useParams } from "react-router-dom";
import "./SingleItem.css";

const SingleItem = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>This is Single Item {id}</h1>
    </div>
  );
};

export default SingleItem;
