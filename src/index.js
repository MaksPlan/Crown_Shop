import React from "react";
import ReactDOM from "react-dom/client";

import "./assets/resets.scss";
import "./assets/normalizes.scss";
import "./index.styles.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";
import UserProvider from "./context/UserContext";
import ShopProvider from './context/ShopContext';
import CartProvider from './context/CartContext';




const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <UserProvider>
      <ShopProvider>
        <CartProvider>
          <App />
        </CartProvider>

      </ShopProvider>
    </UserProvider>
  </Router>
);

reportWebVitals();
