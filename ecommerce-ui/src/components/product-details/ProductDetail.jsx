import React from "react";
import "./productdetails.css";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { addProduct } from "../../redux/cartRedux";
import { useDispatch } from "react-redux";

const Color = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  cursor: pointer;
  margin-right: 10px;
  border: 1px solid black;
`;
const ProductDetail = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    const getDetails = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/api/product/find/${id}`
        );
        setProduct(res.data);
      } catch (error) {}
    };
    getDetails();
  }, [id]);
  const handleQuantity = (type) => {
    if (type === "dec") {
      setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };
  const handleAddCart = () => {
    dispatch(
      addProduct({
        ...product,
        quantity,
        color,
        size,
      })
    );
  };
  return (
    <div className="productDetail">
      <div className="productWrapper">
        <div className="productLeft">
          <img src={product.img} alt={product.title} className="productImg" />
        </div>
        <div className="productRight">
          <div className="content">
            <h1 className="productInfoTitle">Woman Jacket</h1>
            <p className="productInfoDesc">{product.desc}</p>
            <p className="productInfoPrice">$ {product.price}</p>
            <div className="colorContainer">
              <p className="colorTitle">Color:</p>
              {product.color
                ? product.color.map((color) => (
                    <Color
                      key={color}
                      style={{ backgroundColor: `${color}` }}
                      onClick={() => setColor(color)}
                    />
                  ))
                : "No color is available!"}
            </div>
            <div className="moreContainer">
              <div className="amount">
                <button
                  disabled={quantity === 0}
                  className="decreaseBtn"
                  onClick={() => handleQuantity("dec")}
                >
                  -
                </button>
                <input
                  type="number"
                  value={quantity}
                  readOnly
                  className="count"
                />
                <button
                  className="increaseBtn"
                  onClick={() => handleQuantity("inc")}
                >
                  +
                </button>
              </div>
              <div className="select">
                <select
                  name=""
                  id=""
                  className="selectSize"
                  onChange={(e) => setSize(e.target.value)}
                >
                  <option selected>Select Size</option>
                  {product.size
                    ? product.size.map((size) => (
                        <option value={size} key={size} className="optionSize">
                          {size}
                        </option>
                      ))
                    : "No size is available!"}
                </select>
              </div>
            </div>
            <button onClick={handleAddCart} className="addToCart">
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
