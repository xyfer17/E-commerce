import React from "react";
import { Annoucement, Navbar, Slider } from "../components";
import Categories from "../components/Categories";

import Products from "../components/Products";

const Home = () => {
  return (
    <div>
      <Annoucement />
      <Navbar />
      <Slider />
      <Categories />
      <Products />
    </div>
  );
};

export default Home;
