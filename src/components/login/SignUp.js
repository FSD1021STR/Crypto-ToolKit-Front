import { Link } from "react-router-dom";
import style from "./login.module.css";

const SignUp = () => {
  return (
    <>
      <div className={style.wrapper}>
        <div className={style.container}>
          <div className={style.signup}>
            <Link to="/signup">Sing Up</Link>
          </div>
          <div className="login">
            <Link to="/signin">Login</Link>
          </div>
          <form>
            <div className={style.singup_form}>
              <input
                type="text"
                name="username"
                placeholder="Your Username"
                className="input"
              ></input>
              <input
                type="email"
                name="email"
                placeholder="Your Email Address"
                className="input"
              ></input>
              <input
                type="password"
                name="password"
                placeholder="Choose a Password"
                className="input"
              ></input>
              <button className={style.btn}>Create accont</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
