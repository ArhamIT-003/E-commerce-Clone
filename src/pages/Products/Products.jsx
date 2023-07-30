import React, { useState } from "react";
import "./Products.scss";
import List from "../../components/List/List";
import { useParams } from "react-router-dom";

const Products = () => {
  const catId = parseInt(useParams().id);

  const [max, setMax] = useState(1000);
  const [sort, setSort] = useState("");

  return (
    <div className="products">
      <div className="left">
        <div className="filter-items">
          <h2>product Categories</h2>
          <div className="form">
            <input type="checkbox" id="1" value="1" />
            <label htmlFor="1">shoes</label>
          </div>
          <div className="form">
            <input type="checkbox" id="2" value="1" />
            <label htmlFor="2">T-shirt</label>
          </div>
          <div className="form">
            <input type="checkbox" id="3" value="1" />
            <label htmlFor="3">Shorts</label>
          </div>
        </div>
        <div className="filter-items">
          <h2>filter by price</h2>
          <div className="range">
            <span>0</span>
            <input
              type="range"
              min={10}
              max={1000}
              onChange={(e) => setMax(e.target.value)}
            />
            <span>{max}</span>
          </div>
        </div>
        <div className="filter-items">
          <h2>sort by</h2>
          <div className="form">
            <input
              type="radio"
              id="low"
              value="asc"
              name="price"
              onChange={(e) => setSort("asc")}
            />
            <label htmlFor="low">Price(Lowest First)</label>
          </div>
          <div className="form">
            <input
              type="radio"
              id="high"
              value="desc"
              name="price"
              onChange={(e) => setSort("desc")}
            />
            <label htmlFor="high">Price(highest First)</label>
          </div>
        </div>
      </div>
      <div className="right">
        <img
          src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
          className="mainImage"
        />
        <List id={catId} maxPrice={max} sort={sort} />
      </div>
    </div>
  );
};

export default Products;
