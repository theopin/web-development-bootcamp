import React from "react";
import ReactDOM from "react-dom";
import * as operations from "./components/two/Operations";

import "./styles.css";

import Header from "./components/two/Header";

const rootElement = document.getElementById("root");
// const root = createRoot(rootElement);

ReactDOM.render(
  <div>
    <Header />
    <div>{operations.add(1, 2)}</div>
    <div>{operations.subtract(1, 2)}</div>
    <div>{operations.multiply(1, 2)}</div>
    <div>{operations.divide(1, 2)}</div>
  </div>,
  rootElement
);
