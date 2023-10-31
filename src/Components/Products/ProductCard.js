import React from "react";

const ProductCard = ({ image, title, description, price }) => {
  return (
    <div className="product-card">
      <div className="product-card-inner">
        <div className="product-card-front">
          <img src={image} alt={title} />
          <h2>{title}</h2>
        </div>
        <div className="product-card-back">
          <p>{description}</p>
          <p>Price: ${price}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
