import "./productlist.css";
import React from "react";
import Footer from "../../components/footer/Footer";
import Inform from "../../components/inform/Inform";
import Navbar from "../../components/navbar/Navbar";
import NewLetter from "../../components/newletter/NewLetter";
import Products from "../../components/products/Products";
import { useLocation } from "react-router-dom";
import { useState } from "react";

const ProductList = () => {
  const location = useLocation();
  const category = location.pathname.split("/")[2];
  const [filter, setFilter] = useState({});
  const [sort, setSort] = useState("newest");
  const handleFilters = (e) => {
    const value = e.target.value;
    setFilter({
      ...filter,
      [e.target.name]: value,
    });
  };
  return (
    <main>
      <div className="topBar">
        <Inform />
        <Navbar />
      </div>
      <h1 style={{ textTransform: "capitalize" }} className="categoryTitle">
        {category} Clothes
      </h1>
      <div className="filterContainer">
        <div className="filter">
          <span className="filterText">Filter Products:</span>
          <select name="color" onChange={handleFilters}>
            <option disabled>Color</option>
            <option>white</option>
            <option>black</option>
            <option>red</option>
            <option>blue</option>
            <option>yellow</option>
            <option>green</option>
          </select>
          <select name="size" onChange={handleFilters}>
            <option disabled>Size</option>
            <option>XS</option>
            <option>S</option>
            <option>M</option>
            <option>L</option>
            <option>XL</option>
          </select>
        </div>
        <div className="filter">
          <span className="filterText">Sort Products:</span>
          <select onChange={(e) => setSort(e.target.value)}>
            <option value="newest">Newest</option>
            <option value="asc">Price (asc)</option>
            <option value="desc">Price (desc)</option>
          </select>
        </div>
      </div>
      <Products category={category} filter={filter} sort={sort} />
      <NewLetter />
      <Footer />
    </main>
  );
};

export default ProductList;
