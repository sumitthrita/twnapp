import React from "react";
import { Card, CardGroup } from "react-bootstrap";
import "./ServiceCard.css";
import Button from "./Button";

function ServiceCard(props) {
  return (
    <div className="service">
      {/* <div className="service__image">
        <img src={BikeImage} alt="bike" className="bikeservice__image"></img>
      </div>

      <h1 class="impact">Services We Provide..</h1> */}
      <div className="services__card">
        <CardGroup>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={props.img} className="service__img" />
            <Card.Body>
              <div className="service__title">
                <Card.Title className="title">{props.title}</Card.Title>
                <p className="service__money"> {props.price}</p>
              </div>
              <Card.Text>
                <p className="service__description">{props.description}</p>
                {/* <ul>
                <li>good.</li>
                <li>good.</li>
                <li>good.</li>
              </ul> */}
              </Card.Text>
              <Button id="service___button" />
            </Card.Body>
          </Card>
        </CardGroup>
      </div>
    </div>
  );
}
export default ServiceCard;
