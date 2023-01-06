import React, { useContext } from "react";
import Card from "../Card/Card";
import { ShopProductContext } from "../../context/ShopContext";

import "./MainPage.styles.scss";

const MainPage = () => {

  const { shopProduct } = useContext(ShopProductContext);
  return (
    <div className="categories-container">
      {shopProduct.map((item, i) => <Card key={i + item} category={item} />
      )}
    </div>
  );
};

export default MainPage;
