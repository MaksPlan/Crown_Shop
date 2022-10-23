import React from "react";
import { categoriesData } from "../../mocked/categoriesData";
import Card from "../Card/Card";
import "./MainPage.styles.scss";

const MainPage = () => {
  return (
    <div className="categories-container">
      {categoriesData.map((item, i) => (
        <Card key={i + item} category={item} />
      ))}
    </div>
  );
};

export default MainPage;
