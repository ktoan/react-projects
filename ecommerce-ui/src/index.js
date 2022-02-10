import React from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import App from "./App";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import SingleProduct from "./pages/single-product/SingleProduct";
import Cart from "./pages/cart/Cart";
import ProductList from "./pages/product-list/ProductList";
import { Provider } from "react-redux";
import store from "./redux/store";

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/products/:category" element={<ProductList />} />
          <Route path="/product/:id" element={<SingleProduct />} />
        </Routes>
      </Router>
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
