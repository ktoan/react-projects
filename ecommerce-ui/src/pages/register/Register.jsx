import React from "react";
import { Link } from "react-router-dom";
import "./register.css";

const Register = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="left">
          <div className="content">
            <h1 className="logo">AmazonNa</h1>
            <p className="desc">Join with us to make you more beautiful ^^</p>
          </div>
        </div>
        <div className="right">
          <div className="content" style={{ textAlign: "center" }}>
            <h1 className="heading">Register</h1>
            <form action="">
              <input
                type="text"
                className="formInput"
                placeholder="Your Name"
              />
              <input type="email" className="formInput" placeholder="Email" />
              <input
                type="password"
                className="formInput"
                placeholder="Password"
              />
              <input
                type="password"
                className="formInput"
                placeholder="Confirm Password"
              />
              <button type="submit" className="loginBtn">
                Create an Account
              </button>
            </form>
            <div className="text">
              <p className="question">If you have an account?</p>
            </div>
            <Link to="/login">
              <button className="registerBtn">Log in</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
