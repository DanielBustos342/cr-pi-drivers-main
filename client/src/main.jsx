import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
// import { Provider } from "react-redux";
// import { store } from "../src/Redux/Store/store.js";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
