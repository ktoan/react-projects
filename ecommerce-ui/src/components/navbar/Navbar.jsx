import "./navbar.css";
import React from "react";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);
  return (
    <div className="navbar">
      <div className="navbarWrapper">
        <div className="navbarLeft">
          <div className="searchContainer">
            <input
              type="text"
              className="searchInput"
              placeholder="Search..."
            />
            <FaSearch className="searchIcon" />
          </div>
        </div>
        <div className="navbarCenter">
          <Link to="/" className="linkTo">
            <span className="logoBrand">AmazonNa</span>
          </Link>
        </div>
        <div className="navbarRight">
          <Link className="navbarRightLink" to="/login">
            Login
          </Link>
          <Link className="navbarRightLink" to="/register">
            Register
          </Link>
          <Link className="navbarRightLink" to="/cart">
            <div className="cartLink">
              <FaShoppingCart />
              <div className="cartCounter">
                <span>{quantity}</span>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
