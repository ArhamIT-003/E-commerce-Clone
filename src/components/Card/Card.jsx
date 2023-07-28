import React from "react";
import { Link } from "react-router-dom";
import "./Card.scss";

const Card = ({ item }) => {
  return (
    <Link to={`/products/${item.id}`}>
      <div className="card">Card</div>
    </Link>
  );
};

export default Card;
