import React from "react";
import "./FeaturedProduct.scss";
import Card from "../Card/Card";

const products = [
  {
    id: 1,
    img: "https://images.pexels.com/photos/3965557/pexels-photo-3965557.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Dress",
    oldPrice: 19,
    price: 12,
    isNew: true,
  },
  {
    id: 2,
    img: "https://images.pexels.com/photos/4068314/pexels-photo-4068314.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Hat",
    oldPrice: 19,
    price: 12,
    isNew: true,
  },
  {
    id: 3,
    img: "https://images.pexels.com/photos/4068314/pexels-photo-4068314.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Shirt",
    oldPrice: 19,
    price: 12,
  },
  {
    id: 4,
    img: "https://images.pexels.com/photos/4068314/pexels-photo-4068314.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Hat",
    oldPrice: 19,
    price: 12,
  },
];
const FeaturedProduct = ({ type }) => {
  return (
    <div className="featured">
      <div className="top">
        <h1>{type} Products</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
      <div className="bottom">
        {products.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProduct;
