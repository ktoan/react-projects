import "./listcart.css";
import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

const ColorDiv = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  border: 1px solid gray;
`;

const SummaryItem = styled.div`
  margin: 30px 0;
  display: flex;
  justify-content: space-between;
  font-size: ${(props) => (props.type === "total" ? "32px" : "24px")};
  font-weight: ${(props) => props.type === "total" && "600"};
`;

const ListCart = () => {
  const cart = useSelector((state) => state.cart);
  return (
    <div className="cart">
      <div className="cartWrapper">
        <h1 className="title">Your Bag</h1>
        <div className="cartTop">
          <button className="topBtn">Continue Shopping</button>
          <button className="topBtn checkoutBtn">Checkout now</button>
        </div>
        <div className="cartBottom">
          <div className="cartInfo">
            {cart.products.map((product) => (
              <div className="product">
                <div className="productDetails">
                  <img
                    src={product.img}
                    alt={product.title}
                    className="productImg"
                  />
                  <div className="details">
                    <span className="productName">
                      <strong>Product:</strong> {product.title}
                    </span>
                    <span className="productID">
                      <strong>ID:</strong> {product._id}
                    </span>
                    <ColorDiv color={product.color} />
                    <span className="productSize">
                      <strong>Size:</strong> {product.size}
                    </span>
                  </div>
                  <div className="priceDetails">
                    <div className="productAmountContainer">
                      <button className="removeBtn">-</button>
                      <div className="productAmount">{product.quantity}</div>
                      <button className="addBtn">+</button>
                    </div>
                    <span className="productPrice">
                      $ {product.price * product.quantity}
                    </span>
                  </div>
                </div>
              </div>
            ))}
            <div className="underline"></div>
          </div>
          <div className="summary">
            <h1 className="summaryTitle">ORDER SUMMARY</h1>
            <SummaryItem>
              <span className="summaryText">Subtotal</span>
              <span className="summaryPrice">$ {cart.total}</span>
            </SummaryItem>
            <SummaryItem>
              <span className="summaryText">Shipping</span>
              <span className="summaryPrice">$5</span>
            </SummaryItem>
            <SummaryItem>
              <span className="summaryText">Discount</span>
              <span className="summaryPrice">$-10</span>
            </SummaryItem>
            <SummaryItem type="total">
              <span className="summaryText">Total</span>
              <span className="summaryPrice">$ {cart.total}</span>
            </SummaryItem>
            <button className="checkout">Checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListCart;
