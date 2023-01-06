import React from "react";
import Home from "./routes/home/Home";
import Navigation from "./routes/nav/Navigation";
import Shop from "./routes/shop/Shop";
import Authentication from "./routes/autentication/Authentication";
import { Routes, Route } from "react-router-dom";
import CartCheckOut from "./routes/cart-checkout/CartCheckOut";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path={`/shop/:title`} element={<Shop />} />
        <Route path="shop" element={<Shop/>}/>
        <Route path="cartCheckOut" element={<CartCheckOut />} />
        <Route path="authentication" element={<Authentication />} />
      </Route>
    </Routes>
  );
};

export default App;
