import React from "react";
import "./WhyChooseUs.css";

function WhyChooseUs(props) {
  return (
    // <div className="whychooseus__area">
    //   <div className="whychooseus__container">
    /* <div className="whychooseus__title">
              <h2>Why Choose Us </h2>
              <div className="bar"></div>
            </div> */
    <div className="whychooseus__grid">
      <div className="whychooseus__singleItem">
        <div className="whychooseus__icon">
          <props.img />
        </div>
        <h5 className="whychooseus__title">{props.title}</h5>
        <p className="whychooseus__subtitle">{props.subtitle}</p>
      </div>
    </div>
    // //   </div>
    // // </div>
  );
}
export default WhyChooseUs;
