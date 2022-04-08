import { Link } from "react-router-dom";
import React, { useState } from "react";
import style from "./login.module.css";

const SignIn = () => {
  return (
    <>
      <div className={style.wrapper}>
        <div className={style.container}>
          <div className={style.login_header}>
            <Link to="/signup">Sing Up</Link>
          </div>
          <div className={style.login_header}>
            <Link to="/signin">Log In</Link>
          </div>
          <form>
            <div className={style.singup_form}>
              <input
                type="email"
                name="email"
                placeholder="Your Email Address"
              ></input>
              <input
                type="password"
                name="password"
                placeholder="Password"
              ></input>
              <p> you forgot your password ?</p>
              <button type="submit" className={style.btn}>
                logIn
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignIn;
