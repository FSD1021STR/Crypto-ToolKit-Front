import React from "react";
import { Link } from "react-router-dom";
import logo from "./../images/logo.png"
import "./navbar.css"

const Navbar = () => {
    return (
        <div className="navbar">
            <img
                className="logo"
                src={logo}
                alt="imagen principal de la página"
            />
            <div className="links">
                <Link to="/" className="link">Home</Link>
                <Link to="/markets" className="link">Markets</Link>
            </div>
        </div>
    )
}

export default Navbar;