import React from "react";
import Inform from "../../components/inform/Inform";
import Navbar from "../../components/navbar/Navbar";
import ProductDetail from "../../components/product-details/ProductDetail";

const SingleProduct = () => {
  return (
    <main>
      <div className="topBar">
        <Inform />
        <Navbar />
      </div>
      <ProductDetail />
    </main>
  );
};

export default SingleProduct;
