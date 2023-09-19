import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import homeImage from "../../assets/home-img.png";
import Minter from "./Minter";
function App() {
  const NftId = "rkp4c-7iaaa-aaaaa-aaaca-cai"
  return (
    <div className="App">
      <Header />
      <Minter />
      {/* <img className="bottom-space" src={homeImage} /> */}
      <Footer />
    </div>
  );
}

export default App;
