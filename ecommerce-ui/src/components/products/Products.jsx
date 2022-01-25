import React from "react";
import "./products.css";
import { popularProducts } from "../../data";
import Product from "../product/Product";

const Products = () => {
  return (
    <div className="products">
      {popularProducts.map((item) => (
        <Product product={item} key={item.id} />
      ))}
    </div>
  );
};

export default Products;
