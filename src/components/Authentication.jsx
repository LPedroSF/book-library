import React from "react";
import { Link } from "react-router-dom"; //will be used later

const Authentication = () => {

  const SignIn = () => {
    alert("This feature is still in production, check at a later date!")
  };

  return (
      <div className="login--contents">
        <input className="login--details login--textbox" type="text" placeholder="Username"/>
        <input className="login--details login--textbox" type="password" placeholder="Password"/>
        <button className="login--details login--btn" onClick={SignIn}>Sign in</button>
      </div>
  );
};

export default Authentication;


