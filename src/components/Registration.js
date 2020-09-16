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
      <div className="register">
        <div className="register__form">
          <form className="registerform">
            <div className="register__title">
              <h2 className="rtitle">Register Form</h2>
              <div className="barid"></div>
            </div>
            <div className="form__group">
              <label className="input">First Name</label>
              <input
                type="text"
                className="form__control , firstname"
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
                className="form__control , lastname"
                id="lastname"
                placeholder="Enter last name"
                // value={state.email}
                // onChange={handleChange}
              />
            </div>
            <div className="form__group">
              <label className="input">Email Address</label>
              <input
                type="email"
                className="form__control , emailid"
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
                className="form__control , contactnumber"
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
                className="form__control , fpassword"
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
                className="form__control , confirmpassword"
                id="confirmPassword"
                placeholder="Confirm Password"
              />
            </div>
            <div className="form__group">
              <label className="input"> I Agree Terms &amp; Conditions </label>
              <input
                type="checkbox"
                className="form__control , checkbox"
                name="terms"
                id="terms"
                value=""
                // onchange={activateButton(this)}
              />
            </div>

            <div className="register__button">
              <br></br>
              <input type="submit" value="Submit" className="submit"></input>
              <br></br>
              <p className="login">
                Already have an account? <Link to="/Login">Login</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default RegistrationForm;
