import React from "react";
import "./productdetails.css";
import styled from "styled-components";
const Color = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  cursor: pointer;
  margin-right: 10px;
`;
const ProductDetail = () => {
  return (
    <div className="productDetail">
      <div className="productWrapper">
        <div className="productLeft">
          <img
            src="https://cf.shopee.vn/file/fc38457a51faa031d773b2abbb2982de"
            alt="Product"
            className="productImg"
          />
        </div>
        <div className="productRight">
          <div className="content">
            <h1 className="productInfoTitle">Woman Jacket</h1>
            <p className="productInfoDesc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
              impedit quod hic tenetur deserunt ipsa commodi inventore dolorem
              consectetur amet molestiae eaque doloremque quaerat, est sapiente
              maiores illo rem enim.
            </p>
            <p className="productInfoPrice">$20</p>
            <div className="colorContainer">
              <p className="colorTitle">Color:</p>
              <Color className="red" />
              <Color className="black" />
              <Color className="blue" />
            </div>
            <div className="moreContainer">
              <div className="amount">
                <button className="decreaseBtn">-</button>
                <input type="number" defaultValue={1} className="count" />
                <button className="increaseBtn">+</button>
              </div>
              <div className="select">
                <select name="" id="" className="selectSize">
                  <option value="XL" className="optionSize">
                    S
                  </option>
                  <option value="XL" className="optionSize">
                    M
                  </option>
                  <option value="XL" className="optionSize">
                    L
                  </option>
                  <option value="XL" className="optionSize">
                    XL
                  </option>
                </select>
              </div>
            </div>
            <button className="addToCart">Add To Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
