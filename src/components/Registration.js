import React, { useState } from "react";
import Button from "./Button";
import "./Registration.css";
import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";

{
  /* <script type = "text/javascript">
function activateButton(element) {
  if (element.checked) {
    document.getElementById("submit").disabled = false;
  } else {
    document.getElementById("submit").disabled = true;
  }
}
</script> */
}

function RegistrationForm(props) {
  const [state, setState] = useState({
    firstname: "",
    lastname: "",
    phonenumber: "",
    email: "",
    password: "",
  });

  //   const handleChange = (e) => {
  //     const { id, value } = e.target;
  //     setState((prevState) => ({
  //       ...prevState,
  //       [id]: value,
  //     }));
  //   };

  return (
    <div>
      <Header />
      <div className="register__form">
        <form>
          <h2 className="register__title">Register Form</h2>
          <div className="form__group">
            <label className="input">First Name</label>
            <input
              type="text"
              className="form__control"
              id="firstname"
              placeholder="Enter first name"
              // value={state.email}
              // onChange={handleChange}
            />
          </div>
          <div className="form__group">
            <label className="input">Last Name</label>
            <input
              type="text"
              className="form__control"
              id="lastname"
              placeholder="Enter last name"
              // value={state.email}
              // onChange={handleChange}
            />
          </div>
          <div className="form__group">
            <label className="input">Email address</label>
            <input
              type="email"
              className="form__control"
              id="email"
              placeholder="Enter email"
              // value={state.email}
              // onChange={handleChange}
            />
          </div>
          <div className="form__group">
            <label className="input">Contact Number</label>
            <input
              type="tel"
              className="form__control"
              id="phone number"
              placeholder="Enter phone number"
              // value={state.email}
              // onChange={handleChange}
            />
          </div>
          <div className="form__group">
            <label className="input">Password</label>
            <input
              type="password"
              className="form__control"
              id="password"
              placeholder="Password"
              // value={state.password}
              // onChange={handleChange}
            />
          </div>
          <div className="form__group">
            <label className="input">Confirm Password</label>
            <input
              type="password"
              className="form__control"
              id="confirmPassword"
              placeholder="Confirm Password"
            />
          </div>
          <div className="form__group">
            <label className="input"> I Agree Terms &amp; Coditions </label>
            <input
              type="checkbox"
              className="form__control"
              name="terms"
              id="terms"
              value=""
              // onchange={activateButton(this)}
            />
          </div>
          <input type="submit" value="Submit"></input>
          <br></br>
          <br></br>
          <p className="login">
            Already have an account? <Link to="/Login">Login</Link>
          </p>
        </form>
      </div>
      <Footer />
    </div>
  );
}
export default RegistrationForm;
