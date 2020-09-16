import React from "react";
import "./ServiceCard.css";
import Button from "./Button";
import {Link} from 'react-router-dom';

function ServiceCard(props) {
  return (
    <div className="service">
      <div className="services__card">
        <div className="service__cardImage">
          <img
            src={props.img}
            variant="top"
            alt="service"
            className="service__img"
          />
          <div className="service__cardBody">
            <div class="Stitle">
              <div className="service__title">
                <div className="title">{props.title}</div>
                <p className="service__money"> {props.price}</p>
              </div>
            </div>
            <div className="service__cardText">
              <p className="service__description">{props.description}</p>
            </div>
            <Link to="/bikeInfo" >
            <Button
              id="service___button"
              buttonName="Book Service"
              className="service__cardButton"
            /></Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ServiceCard;
