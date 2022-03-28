import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/crypto-logo.png";
import DropDown from "../dropDown.mobile/dropDown.mobile";
import LoginButton from "../loginButton/loginButton";
import styles from "./navbar.module.css";
const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <img
        className={styles.logo}
        src={logo}
        alt="imagen principal de la página"
      />
      <div className={styles.links}>
        <Link to="/" className={styles.link}>
          Home
        </Link>
        <Link to="/markets" className={styles.link}>
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
