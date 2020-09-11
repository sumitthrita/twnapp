import React from "react";
import "./aboutus.css";
import images from "./images.jpeg";

const aboutus = () => {
  return (
    <div>
      <div className="aboutus">
        <div className="servicearea">
          <div className="container">
            <div className="aboutus__title">
              <span>About Us</span>
              <h2>About Us Title</h2>
              <div className="bar"></div>
            </div>
            <div className="aboutus__content">
              <p className="content">
                It was popularised in the 1960s with the release of Letraset
                sheets containing Lorem Ipsum passages, and more recently with
                It was popularised in the 1960s with the release of Letraset
                sheets containing Lorem Ipsum passages, and more recently with
              </p>
              <img src={images} alt="iamge" className="aboutus__contentimg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default aboutus;
