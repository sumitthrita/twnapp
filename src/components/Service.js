import React, { Component } from "react";
import ServiceCard from "./ServiceCard";
import Header from "./Header";
import Footer from "./Footer";
import ServiceCardDetails from "./ServiceCardDetails";
import BikeImage from "./BikeService.jpg";
import "./Service.css";

class Service extends Component {
  render() {
    // const{ id,img,price,title} = this.props.service;

    function createService(details) {
      return (
        <ServiceCard
          key={details.id}
          img={details.img}
          title={details.title}
          price={details.price}
          description={details.description}
        />
      );
    }

    return (
      <div>
        <Header />

        <div className="service">
          <div className="service__image">
            <img
              src={BikeImage}
              alt="bike"
              className="bikeservice__image"
            ></img>
          </div>
          <h1 class="impact">Services We Provide....</h1>
          <div className="details__service">
            {ServiceCardDetails.map(createService)}
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}
export default Service;
