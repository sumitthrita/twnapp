import React from "react";
import StarIcon from "mdi-react/StarIcon";
import StarOutlineIcon from "mdi-react/StarOutlineIcon";

const StarRating = props => {
  const {
    selected_rating,
    starCount,
    hover_rating,
    handleOnClick,
    handleOnMouseOver,
    handleOnMouseLeave
  } = props;

  return (
    <div className="rating-holder">
      <div className="rating-bar">
        {Array(starCount)
          .fill()
          .map((el, index) => (
            <div
              className={`rating-icon ${
                selected_rating >= index + 1 || hover_rating >= index + 1
                  ? "rotate"
                  : ""
              }`}
              key={index + 1}
              onClick={() => handleOnClick(index + 1)}
              onMouseOver={() => handleOnMouseOver(index + 1)}
              onMouseLeave={handleOnMouseLeave}
            >
              {selected_rating >= index + 1 || hover_rating >= index + 1 ? (
                <StarIcon />
              ) : (
                <StarOutlineIcon />
              )}
            </div>
          ))}
      </div>
    </div>
  );
};

export default StarRating;
