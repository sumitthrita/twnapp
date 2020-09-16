import React from "react";
import "./HowWeWorkItem.css";

const HowWeWorkItem = ({ item, icon }) => {
  const Icon = icon;
  return (
    <div className="HowWeWorkItem__Container">
      <div className="HowWeWorkItem__Icon">
        <Icon fontSize="large" className="icon" />
      </div>
      <div className="HowWeWorkItem__Detail">
        <p> {item.detail} </p>
      </div>
    </div>
  );
};

export default HowWeWorkItem;
