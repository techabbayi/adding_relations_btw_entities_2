import React from "react";
import RatingWidget from "./ratingWidget";
import '../App.css';

const ProductCard = ({ product, onRatingSubmit }) => {
  return (
    <div className="product-card">
      <img src="product-image-placeholder.jpg" alt={product.name} />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>Average Rating: {product.avgRating.toFixed(1)}</p>
      <RatingWidget
        productId={product.id}
        onRatingSubmit={onRatingSubmit}
      />
    </div>
  );
};

export default ProductCard;
