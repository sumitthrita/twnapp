import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import slideOne from "./slide1.jpeg";
import slideTwo from "./slide2.jpeg";
import slideThree from "./slide3.jpeg";
import slideFour from "./slide4.jpeg";
import slideFive from "./slide5.jpeg";
import Button from "./Button";
import ServiceSection from "./ServiceSection";
import ServiceSectionDetails from "./servicesectiondetails";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Aboutus from "./aboutus";

import "./Homepage.css";
// import { Carousel } from "react-bootstrap";
const slides = [];
slides.push(slideOne, slideTwo, slideThree, slideFour, slideFive);

const Homepage = () => {
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  function createservicesection(service) {
    return (
      <ServiceSection
        key={service.id}
        img={service.imgURL}
        title={service.title}
      />
    );
  }

  return (
    <div>
      <Header />
      <div className="homepage__slideshow">
        {/* <Slider {...settings}> */}
        {slides.map((slide) => (
          <div
            key={slide}
            style={{ backgroundImage: `url('${slide}')` }}
            className="slide"
          >
            <div class="box">
              <div className="homepage__bookNow">
                <Button className="button" />
                <div className="homepage__arrowBox">
                  <p style={{ color: "#fff" }}>
                    it was popularised in the 1960s with the release of Letraset
                    sheets containing Lorem Ipsum passages
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
        {/* </Slider> */}
      </div>
      <div className="homepage__aboutus">
        <Aboutus />
      </div>
      <div className="homepage__servicesection">
        <div className="servicearea">
          <div className="container">
            <div className="servicestitle">
              <span>What We Provide</span>
              <h2>Our Services</h2>
              <div className="bar"></div>
            </div>
            <div class="homepage__servicesectiondetails">
              {ServiceSectionDetails.map(createservicesection)}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Homepage;
