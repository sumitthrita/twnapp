import React from 'react';
import slides from './HomepageSlideshowDetails';
import Button from './Button';
import './HomepageSlideshow.css';
import {Link} from 'react-router-dom';


const HomePageSlideshow = () => {
  function createSlide () {
   return slides.map((slide) => (
        <div
          key={slide.slide}
          style={{ backgroundImage: `url('${slide.slide}')` }}
          className="slide"
        >
          <div class="box">
            <div className="homepage__bookNow">
              <Link to="/services">
              <Button className="button" buttonName="Book Now" />
              </Link>
              <div className="homepage__arrowBox">
                <p style={{ color: "#fff" }}>
                  it was popularised in the 1960s with the release of Letraset
                  sheets containing Lorem Ipsum passages
                </p>
              </div>
            </div>
          </div>
        </div>
      ))
  }

    return (
        <div className="homepage__slideshow">
        {createSlide()}  
      </div>
       );
};


export default HomePageSlideshow;