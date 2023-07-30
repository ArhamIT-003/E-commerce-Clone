import React from "react";
import Card from "../Card/Card";
import "./List.scss";

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

const List = () => {
  return (
    <div className="list">
      {products?.map((items) => (
        <Card key={items.id} item={items} />
      ))}
    </div>
  );
};

export default List;
