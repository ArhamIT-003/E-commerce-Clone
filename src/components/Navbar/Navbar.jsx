import React, { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { ShoppingCart } from "@mui/icons-material";
import Cart from "../Cart/Cart";
import "./Navbar.scss";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <div className="item">
            <img src="/img/en.png" alt="" />
            <KeyboardArrowDownIcon />
          </div>

          <div className="item">
            <span>USD</span>
            <KeyboardArrowDownIcon />
          </div>

          <div className="item">
            <Link className="link" to="/products/1">
              Women
            </Link>
          </div>

          <div className="item">
            <Link className="link" to="/products/2">
              Men
            </Link>
          </div>

          <div className="item">
            <Link className="link" to="/products/3">
              Chidrens
            </Link>
          </div>
        </div>
        <div className="center">
          <Link className="link" to="/">
            easyshop
          </Link>
        </div>
        <div className="right">
          <div className="item">
            <Link className="link" to="/">
              Home Page
            </Link>
          </div>

          <div className="item">
            <Link className="link" to="/about">
              About
            </Link>
          </div>

          <div className="item">
            <Link className="link" to="/contact">
              Contact
            </Link>
          </div>

          <div className="item">
            <Link className="link" to="/products/1">
              Women
            </Link>
          </div>

          <div className="item">
            <Link className="link" to="/products/2">
              Men
            </Link>
          </div>

          <div className="item">
            <Link className="link" to="/store">
              Store
            </Link>
          </div>
          <div className="icons">
            <SearchIcon />
            <PersonOutlineOutlinedIcon />
            <FavoriteBorderOutlinedIcon />
            <div
              className="cartIcons"
              onClick={() => {
                setOpen(!open);
              }}
            >
              <ShoppingCart />
              <span>3</span>
            </div>
          </div>
        </div>
      </div>

      {open && <Cart />}
    </div>
  );
};

export default Navbar;
