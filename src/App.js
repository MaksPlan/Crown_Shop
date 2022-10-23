import React from "react";
import Home from "./routes/home/Home";
import Navigation from "./routes/nav/Navigation";
import Shop from "./routes/shop/Shop";
import SignIn from "./routes/sign_in/SignIn";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="sign_in" element={<SignIn />} />
      </Route>
    </Routes>
  );
};

export default App;
