import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { GlobalProvider } from "./Context/GlobalProvider";

ReactDOM.render(
  <GlobalProvider>
    <App />
  </GlobalProvider>,
  document.querySelector("#root")
);
