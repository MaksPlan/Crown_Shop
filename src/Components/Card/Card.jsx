import React from "react";
import "../Card/Card.styles.scss";

const Card = ({ category }) => {
  const { title, imageUrl } = category;

  return (
    <div className="category-container">
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />

      <div className="category-body-container">
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
};

export default Card;
