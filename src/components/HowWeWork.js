import React from "react";
import HowWeWorkItem from "./HowWeWorkItem";
import HowWeWorkDetails from "./HowWeWorkDetails";
import "./HowWeWork.css";

const RenderItem = () => {
  return HowWeWorkDetails.map((item) => (
    <HowWeWorkItem item={item} icon={item.icon} />
  ));
};

const HowWeWork = () => {
  return (
    <div className="HowWeWork__Container">
      <div className="howwework__title">
        <h2>How we work</h2>
        <div className="bar"></div>
      </div>
      <div className="HowWeWork__Items">{RenderItem()}</div>
    </div>
  );
};

export default HowWeWork;
