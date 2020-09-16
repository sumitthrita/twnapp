import React from "react";
import Header from "./Header";
import HomepageSlideshow from './HomepageSlideshow';
import HomepageService from './HomepageService';
import Footer from "./Footer";
import Aboutus from "./aboutus";
import Contact from './HomePageContact';

const Homepage = () => {
  
  return (
    <div>
      <Header />
      <HomepageSlideshow />
      <HomepageService />
      <Aboutus />
      <Contact/>
      <Footer />
    </div>
  );
};
export default Homepage;
