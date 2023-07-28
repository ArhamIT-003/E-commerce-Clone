import React from "react";
import "./Home.scss";
import Slider from "../../components/Slider/Slider";
import FeaturedProduct from "../../components/FeaturedProducts/FeaturedProduct";

const Home = () => {
  return (
    <div className="home">
      <Slider />
      <FeaturedProduct type="featured" />
      <FeaturedProduct type="trending" />
    </div>
  );
};

export default Home;
