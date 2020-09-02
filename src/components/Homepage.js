import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import slideOne from "./slide1.jpeg";
import slideTwo from "./slide2.jpeg";
import slideThree from "./slide3.jpeg";
import slideFour from "./slide4.jpeg";
import slideFive from "./slide5.jpeg";
import Button from "./Button";
import "./Homepage.css";
// import { Carousel } from "react-bootstrap";
const slides = [];
slides.push(slideOne, slideTwo, slideThree, slideFour, slideFive);

const Homepage = () => {
  return (
    <div>
      <Header />
      <div className="homepage__slideshow">
        {slides.map((slide) => (
          <div
            key={slide}
            style={{ backgroundImage: `url('${slide}')` }}
            className="slide"
          ></div>
        ))}
      </div>
      <div class="box">
        <div className="homepage__bookNow">
          <Button />
          <div className="homepage__arrowBox">
            <p style={{ color: "#fff" }}>
              it was popularised in the 1960s with the release of Letraset
              sheets containing Lorem Ipsum passages
            </p>
          </div>
        </div>
      </div>
      <div className="homepage__servicesection"></div>
      <Footer />
    </div>
  );
};

export default Homepage;
