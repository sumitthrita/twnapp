import React from 'react';
import "./HowWeWorkItem.css";


const HowWeWorkItem = ({item, icon}) => {
  
  const Icon=icon
    return ( 
        <div className="HowWeWorkItem__Container">
        <div className="HowWeWorkItem__Icon">
            <Icon />
        </div>
        <div className="HowWeWorkItem__Detail" >
            <h2> {item.detail} </h2>
        </div>
        </div>
    );
};

export default HowWeWorkItem;