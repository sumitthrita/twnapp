import React from "react";
import "./aboutus.css";
import images from "./images.jpeg";
import WhyChooseUs from "./WhyChooseUs";
import WhyChooseUsDetails from "./WhyChooseUsDetails";
import HowWeWork from "./HowWeWork";

const aboutus = () => {
  function createwhychooseus(content) {
    return (
      <WhyChooseUs
        key={content.id}
        img={content.iconURL}
        title={content.title}
        subtitle={content.subtitle}
      />
    );
  }
  return (
    <div>
          <div className="aboutus__container">
            <div className="aboutus__title">
              <h2>About Us </h2>
              <div className="bar"></div>
            </div>
            <div className="aboutus__content">
              <p className="content">
                The wheels nation is fuelled to set your bike on a smooth
                journey. Our team believes in efficiency and topmost customer
                service. Whether it is a bike service, bike repair or bike
                cleaning we are one stop solution for all your bike things. We
                are here to bring a revolution in the bike servicing industry.
                Owing to the current scenario of Covid-19 we promise to provide
                hygienic and safe service to all our customers. If the question
                is bike service, the answer is always TWN.
              </p>
              <img src={images} alt="imagec" className="aboutus__contentimg" />
            </div>
          </div>
          <div className="whychooseus__container">
            <div className="whychooseus__title">
              <h2>Why Choose Us </h2>
              <div className="bar"></div>
            </div>
            <div class="whychooseus__details">
              {WhyChooseUsDetails.map(createwhychooseus)}
            </div>
          </div>
      <HowWeWork />
    </div>
  );
};
export default aboutus;
