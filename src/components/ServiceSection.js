import React from "react";
import "./ServiceSection.css";
import { Link } from "react-router";
// import img from "./service.jpg";

function ServiceSection(props) {
  return (
    <div className="servicearea">
      <div className="container">
        {/* <div className="servicestitle">
          <span>What We Provide</span>
          <h2>Our Services</h2>
          <div className="bar"></div>
        </div> */}
        <div className="service__grid">
          <a href="./app.js" class="link">
            <div className="single__services">
              <div className="service__icon">
                <img src={props.img} alt="img" className="image" />
                <h3 className="subtitle">{props.title} </h3>
              </div>

              {/* <i class="flaticon-right"></i> */}
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ServiceSection;
