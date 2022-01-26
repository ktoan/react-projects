import "./listcart.css";
import React from "react";
import styled from "styled-components";

const ColorDiv = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

const SummaryItem = styled.div`
  margin: 30px 0;
  display: flex;
  justify-content: space-between;
  font-size: ${(props) => (props.type === "total" ? "32px" : "24px")};
  font-weight: ${(props) => props.type === "total" && "600"};
`;

const ListCart = () => {
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
            <div className="product">
              <div className="productDetails">
                <img
                  src="https://www.vintageindustries.nl/download_front/orxqnm1815/1040_Baxter_jogger_black.png"
                  alt=""
                  className="productImg"
                />
                <div className="details">
                  <span className="productName">
                    <strong>Product:</strong> JESSIE THUNDER STORE
                  </span>
                  <span className="productID">
                    <strong>ID:</strong> 9868319857
                  </span>
                  <ColorDiv color="black" />
                  <span className="productSize">
                    <strong>Size:</strong> XL
                  </span>
                </div>
                <div className="priceDetails">
                  <div className="productAmountContainer">
                    <button className="removeBtn">-</button>
                    <div className="productAmount">2</div>
                    <button className="addBtn">+</button>
                  </div>
                  <span className="productPrice">$ 30</span>
                </div>
              </div>
            </div>
            <div className="underline"></div>
            <div className="product">
              <div className="productDetails">
                <img
                  src="https://www.vintageindustries.nl/download_front/orxqnm1815/1040_Baxter_jogger_black.png"
                  alt=""
                  className="productImg"
                />
                <div className="details">
                  <span className="productName">
                    <strong>Product:</strong> JESSIE THUNDER STORE
                  </span>
                  <span className="productID">
                    <strong>ID:</strong> 9868319857
                  </span>
                  <ColorDiv color="black" />
                  <span className="productSize">
                    <strong>Size:</strong> XL
                  </span>
                </div>
                <div className="priceDetails">
                  <div className="productAmountContainer">
                    <button className="removeBtn">-</button>
                    <div className="productAmount">2</div>
                    <button className="addBtn">+</button>
                  </div>
                  <span className="productPrice">$ 30</span>
                </div>
              </div>
            </div>
            <div className="product">
              <div className="productDetails">
                <img
                  src="https://www.vintageindustries.nl/download_front/orxqnm1815/1040_Baxter_jogger_black.png"
                  alt=""
                  className="productImg"
                />
                <div className="details">
                  <span className="productName">
                    <strong>Product:</strong> JESSIE THUNDER STORE
                  </span>
                  <span className="productID">
                    <strong>ID:</strong> 9868319857
                  </span>
                  <ColorDiv color="black" />
                  <span className="productSize">
                    <strong>Size:</strong> XL
                  </span>
                </div>
                <div className="priceDetails">
                  <div className="productAmountContainer">
                    <button className="removeBtn">-</button>
                    <div className="productAmount">2</div>
                    <button className="addBtn">+</button>
                  </div>
                  <span className="productPrice">$ 30</span>
                </div>
              </div>
            </div>
          </div>
          <div className="summary">
            <h1 className="summaryTitle">ORDER SUMMARY</h1>
            <SummaryItem>
              <span className="summaryText">Subtotal</span>
              <span className="summaryPrice">$30</span>
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
              <span className="summaryPrice">$25</span>
            </SummaryItem>
            <button className="checkout">Checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListCart;
