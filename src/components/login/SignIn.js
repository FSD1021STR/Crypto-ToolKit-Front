import { Link } from "react-router-dom";
import style from "./login.module.css";

const SignIn = () => {
  return (
    <>
      <div className={style.wrapper}>
        <div className={style.container}>
          <div className={style.signup}>
            <Link to="/signup">Sing Up</Link>
          </div>
          <div className="login">
            <Link to="/signin">Log In</Link>
          </div>
          <form>
            <div className={style.singup_form}>
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
