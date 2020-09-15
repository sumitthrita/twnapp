import React from 'react';
import ServiceSection from "./ServiceSection";
import ServiceSectionDetails from "./servicesectiondetails";
import './HomepageService.css';


const HomepageService = () => {
    
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
    )
};


export default HomepageService;