import React, { Component } from "react";
import Emoticons from "./Face";
import StarRating from "./SmileyRating";
import Footer from "./Footer";
import "./feedbackemotion.css";

class FeedbackSmiley extends Component {
  state = {
    hover_rating: 4,
    selected_rating: 4
  };

  handleOnClick = i => {
    this.setState({
      selected_rating: i
    });
  };

  handleOnMouseOver = i => {
    this.setState({
      hover_rating: i
    });
  };

  handleOnMouseLeave = () => {
    this.setState({
      hover_rating: 0
    });
  };
  render() {
    const { hover_rating, selected_rating } = this.state;
    let background = "";
    switch (selected_rating) {
      case 1:
        background = "shock-face";
        break;
      case 2:
        background = "sad-face";
        break;
      case 3:
        background = "flat-face";
        break;
      case 4:
        background = "smile-face";
        break;
      case 5:
        background = "happy-face";
        break;
      default:
        background = "flat-face";
    }
    return (
      <div className={`App ${background}`}>
        <Emoticons selected_rating={selected_rating} />
        <div className="label">Rate your experience</div>
        <StarRating
          starCount={5}
          hover_rating={hover_rating}
          selected_rating={selected_rating}
          handleOnClick={this.handleOnClick}
          handleOnMouseOver={this.handleOnMouseOver}
          handleOnMouseLeave={this.handleOnMouseLeave}
        />
        <Footer/>
      </div>
    );
  }
}
export default FeedbackSmiley;