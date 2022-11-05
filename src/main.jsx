import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// import "./index.css";

// bootstrap css
import "bootstrap/dist/css/bootstrap.min.css";

// bootstrap js
import "bootstrap/dist/js/bootstrap.bundle.js";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
