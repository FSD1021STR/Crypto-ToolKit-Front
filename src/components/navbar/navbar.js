import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/crypto-logo.png";
import DropDown from "../dropDown.mobile/dropDown.mobile";
import LoginButton from "../loginButton/loginButton";
import "./navbar.css";
const Navbar = () => {
  return (
    <div className="navbar">
      <img className="logo" src={logo} alt="imagen principal de la página" />
      <div className="links">
        <Link to="/" className="link">
          Home
        </Link>
        <Link to="/markets" className="link">
          Markets
        </Link>
        <LoginButton />
        <div>
          <DropDown />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
