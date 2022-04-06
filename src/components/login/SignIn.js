import { useState } from "react";
import { Link } from "react-router-dom";
import "./login.css";

const SignIn = () => {
  return (
    <>
      <div className="wrapper-login">
        <div className="container-login">
          <div className="login-link">
            <Link to="/signUp">Register</Link>
            <Link to="/signIn">Login</Link>
          </div>
          <form>
            <div className="form-input">
              <input
                type="email"
                name="email"
                placeholder="Your Email Address"
                className="input"
              ></input>
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="input"
              ></input>

              <button type="submit" className="btn">
                logIn
              </button>
              <Link to="#">
                <p>Have you forgotten your password ?</p>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignIn;
