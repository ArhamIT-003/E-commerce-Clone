import React from "react";
import { Link } from "react-router-dom";
import "./Card.scss";

const Card = ({ item }) => {
  return (
    <Link to={`/products/${item.id}`} className="link">
      <div className="card">
        <div className="image">
          {item.isNew && <span>New Arrivals</span>}
          <img src={item.img} alt={item.title} className="main-image" />
        </div>
        <h2>{item.title}</h2>
        <div className="price">
          <h3>${item.oldPrice}</h3>
          <h3>${item.price}</h3>
        </div>
      </div>
    </Link>
  );
};

export default Card;
