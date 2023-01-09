import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { CategoryContainer, BackgroundImg, Title, CategoryBodyContainer, ShopNowBtn } from "./Card.styles.jsx";




const Card = ({ category }) => {
  const { title, imageUrl } = category;
  const navigate = useNavigate();



  return (
    <CategoryContainer>
      < BackgroundImg imgUrl={imageUrl}/>

      <CategoryBodyContainer>
        <Title>{title}</Title>

        <ShopNowBtn onClick={() => navigate(`/shop/${title.toLowerCase()}`)}>Shop Now</ShopNowBtn>
      </CategoryBodyContainer>
    </CategoryContainer>
  );
};

export default Card;
