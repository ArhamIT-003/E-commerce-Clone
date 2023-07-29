import React from "react";
import { Facebook, Google, Instagram, Twitter } from "@mui/icons-material";
import "./Contact.scss";

const Contact = () => {
  return (
    <div className="contact">
      <div className="wrapper">
        <span>Be in touch with us</span>

        <div className="form">
          <input type="email" placeholder="Enter your email" />
          <button>Join Us</button>
        </div>
        <div className="icons">
          <Facebook />
          <Google />
          <Instagram />
          <Twitter />
        </div>
      </div>
    </div>
  );
};

export default Contact;
