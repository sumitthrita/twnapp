import React from "react";
import "./ServiceSection.css";

function ServiceSection(props) {
  return (
    <div className="servicearea">
      <div className="container">
        <div className="service__grid">
          <a href="./app.js" class="link">
            <div className="single__services">
              <div className="service__icon">
                <img src={props.img} alt="img" className="image" />
                <h3 className="subtitle">{props.title} </h3>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ServiceSection;
