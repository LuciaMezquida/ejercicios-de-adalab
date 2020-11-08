import React from "react";
import ReactDOM from "react-dom";
import "./styleSheets/index.css";
import App from "./components/Clock";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
