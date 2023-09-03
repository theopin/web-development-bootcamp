import React from "react";
import ReactDOM from "react-dom";

import Heading from "./components/one/Heading";
import Images from "./components/one/Images";
import Stats from "./components/one/Stats";
import Footer from "./components/one/Footer";

import "./styles.css";

const rootElement = document.getElementById("root");
// const root = createRoot(rootElement);

ReactDOM.render(
  <div>
    <Heading />
    <Stats />
    <Images />
    <Footer />
  </div>,
  rootElement
);
