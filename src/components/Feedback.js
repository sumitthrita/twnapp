import React from "react";
import "./feedback.css";
import img from "../components/yourOpinionMatter.jpeg";
// import xX from "./RatingHtml.JS";
import Star from "./StarRating";



function Feedback() {
  return (
      <div className="feedback">
        <div className="div1">
          <h2>Rate our Services</h2>
          <Star />
        </div>
        <div className="div2">
          <img src={img} alt="rate-our-services" />
        </div>
        <div className="div3">
          <h2>MESSAGE</h2>
          <form action="submit">
            <textarea
              id="feedbackform"
              name="feedback"
              rows="5"
              cols="100"
              placeholder="Feedback and queries you have about our services..."
            ></textarea>
            <br />
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>    
  );
}

export default Feedback;
