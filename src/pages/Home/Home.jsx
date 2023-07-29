import React from "react";
import "./Home.scss";
import Slider from "../../components/Slider/Slider";
import FeaturedProduct from "../../components/FeaturedProducts/FeaturedProduct";
import Category from "../../components/Category/Category";
import Contact from "../../components/Contact/Contact";

const Home = () => {
  return (
    <div className="home">
      <Slider />
      <FeaturedProduct type="featured" />
      <Category />
      <FeaturedProduct type="trending" />
      <Contact />
    </div>
  );
};

export default Home;
