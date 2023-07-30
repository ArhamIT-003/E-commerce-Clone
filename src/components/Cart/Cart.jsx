import React from "react";
import { DeleteOutlined } from "@mui/icons-material";
import "./Cart.scss";

const data = [
  {
    id: 1,
    img: "https://images.pexels.com/photos/3965557/pexels-photo-3965557.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Dress",
    oldPrice: 19,
    price: 12,
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti id ut qui provident inventore vel deserunt cupiditate totam eveniet consequuntur iste, adipisci ipsam veritatis mollitia facilis. Expedita dignissimos necessitatibus praesentium?",
  },
];
const Cart = () => {
  return (
    <div className="cart">
      <h1>Products in cart</h1>

      {data.map((items) => (
        <div className="items" key={items.id}>
          <img src={items.img} alt="" />
          <div className="details">
            <h2>{items.title}</h2>
            <p>{items.desc.substring(0, 80)}</p>
            <div className="price">1 x ${items.price}</div>
          </div>
          <DeleteOutlined className="delete" />
        </div>
      ))}
      <div className="total">
        <span>SUBTOTAL</span>
        <span>$123</span>
      </div>
      <button>PROCEED TO CHECKOUT</button>
      <span className="reset">reset</span>
    </div>
  );
};

export default Cart;
