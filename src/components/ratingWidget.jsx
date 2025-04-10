import React, { useState } from "react";
import '../App.css';

const RatingWidget = ({ productId, onRatingSubmit }) => {
  const [rating, setRating] = useState(0); // State for the selected rating
  const [hoveredRating, setHoveredRating] = useState(0); // State for the hovered star rating

  const handleMouseEnter = (index) => setHoveredRating(index);
  const handleMouseLeave = () => setHoveredRating(0);

  const handleStarClick = (index) => setRating(index);

  const handleSubmit = () => {
    if (rating >= 1 && rating <= 5) {
      onRatingSubmit(productId, rating);
      setRating(0);
      alert(`Thank you for rating! You rated this product ${rating} stars.`);
    } else {
      alert("Please select a rating between 1 and 5.");
    }
  };

  return (
    <div className="rating-widget">
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          className={`star ${star <= (hoveredRating || rating) ? "filled" : ""}`}
          onClick={() => handleStarClick(star)}
          onMouseEnter={() => handleMouseEnter(star)}
          onMouseLeave={handleMouseLeave}
        >
          ★
        </span>
      ))}
      <button onClick={handleSubmit}>Submit Rating</button>
    </div>
  );
};

export default RatingWidget;
