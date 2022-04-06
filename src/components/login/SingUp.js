import { Link } from "react-router-dom";

import "./login.css";

const SignUp = () => {
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
                type="text"
                name="username"
                placeholder="Your Email or Username"
                className="input"
              ></input>
              <input
                type="password"
                name="password"
                placeholder="Choose a Password"
                className="input"
              ></input>
              <input
                type="password"
                name="password"
                placeholder="Repit Your Password"
                className="input"
              ></input>
              <button className="btn">Create accont</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
