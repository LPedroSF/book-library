import React from "react";
import { Link } from "react-router-dom";
import LoginImg from "../assets/undraw_secure_login.svg";

const Login = () => {
  return(
    <div className="login__body">
      <div className="login__image">
        <img src={LoginImg} alt="" />
      </div>
      <div className="login">
        <h3 className="login--title">Sign in or register now to <span className="purple">favourite</span> books and get <span className="purple">limited discounts</span>!</h3>
        <div className="login--container">
          <div className="login--contents">
            <input className="login--details login--textbox" type="text" placeholder="Username"/>
            <input className="login--details login--textbox" type="password" placeholder="Password"/>
            <div className="login--details"><input type="checkbox" /> Show Password</div>
          </div>
          <div className="login--btns">
            <button className="login--details login--btn">
              <Link className="login--btn" to="/register">Register</Link>
            </button>
            <button className="login--details login--btn">Sign in</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;