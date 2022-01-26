import React from "react";
import Inform from "../../components/inform/Inform";
import Navbar from "../../components/navbar/Navbar";
import ListCart from "../../components/listcart/ListCart";

const Cart = () => {
  return (
    <main>
      <div className="topBar">
        <Inform />
        <Navbar />
      </div>
      <ListCart />
    </main>
  );
};

export default Cart;
