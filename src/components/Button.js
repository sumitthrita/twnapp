import React from "react";
import "./Button.css";
import { Button } from "react-bootstrap";

const Buttons = ({buttonName}) => {
  return (
    // <button  className="button"  type="button" onClick={props.buttonDestination}>
    //    {props.buttonName}
    // </button>
    <Button variant="dark" className="button">
      {buttonName}
    </Button>
  );
};
export default Buttons;
