import React from "react";
import "./products.css";
import Product from "../product/Product";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const Products = ({ category, filter, sort }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          category
            ? `http://localhost:5000/api/product?category=${category}`
            : "http://localhost:5000/api/product"
        );
        setProducts(res.data);
      } catch (error) {}
    };
    getProducts();
  }, [category]);
  useEffect(() => {
    category &&
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filter).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [products, category, filter]);
  useEffect(() => {
    if (sort === "newest") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.createAt - b.createAt)
      );
    } else if (sort === "asc") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else if (sort === "desc") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort]);

  return (
    <div className="products">
      {category
        ? filteredProducts.map((item, index) => (
            <Product product={item} key={item._id} />
          ))
        : products
            .slice(0, 4)
            .sort((a, b) => a.createAt - b.createAt)
            .map((item, index) => <Product product={item} key={item._id} />)}
    </div>
  );
};

export default Products;
