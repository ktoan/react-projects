import React from "react";
import "./categories.css";
import { categories } from "../../data";
import Category from "../category/Category";
const Categories = () => {
  return (
    <div className="categories">
      {categories.map((item) => (
        <Category key={item.id} category={item} />
      ))}
    </div>
  );
};

export default Categories;
