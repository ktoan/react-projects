import React from "react";
import "./login.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="left">
          <div className="content">
            <h1 className="logo">AmazonNa</h1>
            <p className="desc">
              Let's make your style more beautiful with AmazonNa
            </p>
          </div>
        </div>
        <div className="right">
          <div className="content" style={{ textAlign: "center" }}>
            <h1 className="heading">Login</h1>
            <form action="">
              <input type="email" className="formInput" placeholder="Email" />
              <input
                type="password"
                className="formInput"
                placeholder="Password"
              />
              <button type="submit" className="loginBtn">
                Log in
              </button>
            </form>
            <div className="text">
              <p className="question">If you already have an account?</p>
            </div>
            <Link to="/register">
              <button className="registerBtn">Create An Account</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
