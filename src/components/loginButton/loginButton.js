import React from "react";
import { Link } from "react-router-dom";
import "./loginButton.css";
const LoginButton = () => {
  return (
    <Link to="/signin">
      <button className="loginDesktop">Login</button>
    </Link>
  );
};

export default LoginButton;
