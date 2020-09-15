import React from "react";
import Header from "./Header";
import HomepageSlideshow from './HomepageSlideshow';
import HomepageService from './HomepageService';
import Footer from "./Footer";
import Aboutus from "./aboutus";


const Homepage = () => {
  
  return (
    <div>
      <Header />
      <HomepageSlideshow />
      <HomepageService />
      <Aboutus />
      <Footer />
    </div>
  );
};
export default Homepage;
