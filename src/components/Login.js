import React from "react";
import "./Login.css";
import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";

function Login(props) {
  return (
    <div>
      <Header />
      <br></br>
      <br></br>
      <div className="login__form">
        <form>
          <h2 className="login__title">Login Form</h2>
          <div className="barid"></div>
          <div className="login__form__group">
            <label className="login__input">Email address</label>
            <input
              type="email"
              className="login__form__control"
              id="email"
              placeholder="Enter email"
            />
          </div>
          <div className="login__form__group">
            <label className="login__input">Password</label>
            <input
              type="password"
              className="login__form__control"
              id="password"
              placeholder="Password"
            />
          </div>

          <div className="login__button">
            <input type="submit" value="Login"></input>
            <br></br>
            <br></br>
            <p className="login">
              Don't have an account? <Link to="/signup">Register</Link>
            </p>
          </div>
        </form>
      </div>
      <br></br>
      <Footer />
    </div>
  );
}
export default Login;
