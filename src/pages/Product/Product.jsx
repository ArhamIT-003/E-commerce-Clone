import React, { useState } from "react";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Balance } from "@mui/icons-material";
import "./Product.scss";

const images = [
  "https://images.pexels.com/photos/12179283/pexels-photo-12179283.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/4068314/pexels-photo-4068314.jpeg?auto=compress&cs=tinysrgb&w=600",
];

const Product = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="product">
      <div className="left">
        <div className="images">
          <img
            src={images[0]}
            alt=""
            onClick={(e) => {
              setSelectedImage(0);
            }}
          />
          <img
            src={images[1]}
            alt=""
            onClick={(e) => {
              setSelectedImage(1);
            }}
          />
        </div>
        <div className="mainImage">
          <img src={images[selectedImage]} alt="" />
        </div>
      </div>
      <div className="right">
        <h2>Title</h2>
        <span className="price">$122</span>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium,
          saepe nobis obcaecati ipsa amet doloribus nesciunt necessitatibus
          quisquam odio, sapiente porro excepturi repudiandae rem. Fugit vel a
          quae ratione qui.
        </p>
        <div className="quantity">
          <button
            onClick={() => {
              setQuantity((prev) => (prev === 1 ? 1 : prev - 1));
            }}
          >
            -
          </button>
          {quantity}
          <button
            onClick={() => {
              setQuantity((prev) => prev + 1);
            }}
          >
            +
          </button>
        </div>
        <button className="add">
          <ShoppingCartCheckoutIcon /> Add to cart
        </button>
        <div className="link">
          <div className="item">
            <FavoriteBorderIcon /> Add to favourite
          </div>
          <div className="item">
            <Balance /> ADD TO COMPARE
          </div>
        </div>
        <div className="info">
          <span>Vendor: Polo</span>
          <span>Product Type: T-Shirt</span>
          <span>Tag: T-Shirt, Women, Top</span>
        </div>
        <hr />
        <div className="info">
          <span>DESCRIPTION</span>
          <hr />
          <span>ADDITIONAL INFORMATION</span>
          <hr />
          <span>FAQ</span>
        </div>
      </div>
    </div>
  );
};

export default Product;
