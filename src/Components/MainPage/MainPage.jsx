import React, { useContext } from "react";
import Card from "../Card/Card";
import { ShopProductContext } from "../../context/ShopContext";

import { MainPageContainer } from "./MainPage.styles.jsx";

const MainPage = () => {

  const { shopProduct } = useContext(ShopProductContext);
  return (
    <MainPageContainer>
      {shopProduct.map((item, i) => <Card key={i + item} category={item} />
      )}
    </MainPageContainer>
  );
};

export default MainPage;
