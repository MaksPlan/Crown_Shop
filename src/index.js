import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/resets.scss";
import "./assets/normalizes.scss";
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";
import UserProvider from "./user-context/UserContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <UserProvider>
      <App />
    </UserProvider>

  </Router>
);

reportWebVitals();
