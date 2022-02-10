import React from "react";
import "./category.css";
import styled from "styled-components";
import { Link } from "react-router-dom";

const CategoryItem = styled.div`
  flex: 4;
  border: 1px solid black;
  margin: 0 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 70vh;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${(props) => props.img});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

const Category = ({ category }) => {
  return (
    <CategoryItem img={category.img}>
      <div className="infoCategory">
        <h1>{category.title}</h1>
        <button>
          <Link
            style={{ textDecoration: "none", color: "black" }}
            to={`/products/${category.category}`}
          >
            Shop now
          </Link>
        </button>
      </div>
    </CategoryItem>
  );
};

export default Category;
