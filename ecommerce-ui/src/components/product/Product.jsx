import React from "react";
import "./product.css";
import styled from "styled-components";
import { FaSearch, FaRegHeart, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

const ProductItem = styled.div`
  height: 50vh;
  margin: 5px;
  width: calc((100% - 40px) / 4);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url(${(props) => props.img});
  border: 1px solid rgba(240, 240, 240, 0.9);
  border-radius: 20px;
  display: flex;
  align-items: center;
  transition: all 0.5s ease-in-out;
  justify-content: center;

  &:hover {
    background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
      url(${(props) => props.img});
  }
`;

const Product = ({ product }) => {
  return (
    <ProductItem className="showIconList" img={product.img}>
      <div className="iconLists">
        <div className="iconItem">
          <span className="icon">
            <FaShoppingCart />
          </span>
        </div>
        <div className="iconItem">
          <span className="icon">
            <Link to={`/product/${product._id}`}>
              <FaSearch />
            </Link>
          </span>
        </div>
        <div className="iconItem">
          <span className="icon">
            <FaRegHeart />
          </span>
        </div>
      </div>
    </ProductItem>
  );
};

export default Product;
