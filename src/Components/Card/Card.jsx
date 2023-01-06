import React from "react";
import { useNavigate } from "react-router-dom";

import "../Card/Card.styles.scss";

const Card = ({ category }) => {
  const { title, imageUrl } = category;
  const navigate = useNavigate();

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

        <button onClick={() => navigate(`/shop/${title.toLowerCase()}`)}>Shop Now</button>
      </div>
    </div>
  );
};

export default Card;
