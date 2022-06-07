import React from "react";
import ReactDOM from "react-dom/client";

//theming
import "./styles/index.css";
// import theme from "./styles/theme.js";

//app root
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
