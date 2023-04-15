import React from "react";
import FilledStar from "../../images/star.png";
import EmptyStar from "../../images/starbk.png";
import "./style.scss"

const Rating = ({ rating }) => {
  // Determine the number of filled stars based on the rating
  const filledStars = Array.from({ length: rating }).map((_, index) => (
    <span key={index} className="filled-star">
      <img src={FilledStar} alt="filled" />
    </span>
  ));

  // Determine the number of empty stars based on the remaining rating
  const emptyStars = Array.from({ length: 5 - rating }).map((_, index) => (
    <span key={index} className="empty-star">
        <img src={EmptyStar} alt="Empty" />
    </span>
  ));

  return (
    <div>
      {filledStars}
      {emptyStars}
    </div>
  );
};

export default Rating;