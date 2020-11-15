import React from "react";
import ReactDOM from "react-dom";
import "./styleSheets/index.css";
import Form from "./components/Form";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <Form />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
