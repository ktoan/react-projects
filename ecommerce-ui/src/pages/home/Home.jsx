import React from "react";
import Categories from "../../components/categories/Categories";
import Footer from "../../components/footer/Footer";
import Inform from "../../components/inform/Inform";
import Navbar from "../../components/navbar/Navbar";
import NewLetter from "../../components/newletter/NewLetter";
import Products from "../../components/products/Products";
import Slider from "../../components/slider/Slider";

const Home = () => {
  return (
    <main>
      <div className="topBar">
        <Inform />
        <Navbar />
      </div>
      <Slider />
      <Categories />
      <Products />
      <NewLetter />
      <Footer />
    </main>
  );
};

export default Home;
