import React from "react";
import { Link } from "react-router-dom";
import LoginImg from "../assets/undraw_secure_login.svg";
import Authentication from "../components/Authentication";

const Login = () => {

  const SignIn = () => {
    alert("This feature is still in production, check at a later date!")
  };

  return(
    <div className="login__body">
      <div className="login__image">
        <img src={LoginImg} alt="" />
      </div>
      <div className="login">
        <h3 className="login--title">Sign in or register now to <span className="purple">favourite</span> books and get <span className="purple">limited discounts</span>!</h3>
        <div className="login--container">
          <Authentication />
          <div className="login--contents right">
            <p> Not a member? <Link to="/register">Register here!</Link></p>
            <p>Forgot Password? <button className="temporary_button" onClick={SignIn}>CLick here!</button></p>
          </div>  
        </div>
      </div>
    </div>
  );
};

export default Login;