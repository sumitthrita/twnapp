import React from "react";
// import Avatar from "./Avatar";
import "./RecentNews.css";

function Card(props) {
  return (
    <div className="card">
      <div className="top">
        {/* <Avatar img={props.img} /> */}
        <p className="description">{props.description}</p>
      </div>
    </div>
  );
}

export default Card;
