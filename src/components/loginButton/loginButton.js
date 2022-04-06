import React from "react";
import { Link } from "react-router-dom";
import "./loginButton.css";
const LoginButton = () => {
  return (
    <div>
      <Link to="/signIn">
        <button className="loginDesktop">Login</button>
      </Link>
    </div>
  );
};

export default LoginButton;
