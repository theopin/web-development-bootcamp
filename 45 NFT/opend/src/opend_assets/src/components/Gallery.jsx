import React from "react";
import Item from "./Item";

function Gallery(props) {
  const NftId = "rkp4c-7iaaa-aaaaa-aaaca-cai"

  return (
    <div className="gallery-view">
      <h3 className="makeStyles-title-99 Typography-h3">{props.title}</h3>
      <div className="disGrid-root disGrid-container disGrid-spacing-xs-2">
        <div className="disGrid-root disGrid-item disGrid-grid-xs-12">
          <div className="disGrid-root disGrid-container disGrid-spacing-xs-5 disGrid-justify-content-xs-center"></div>
          <Item  id={NftId}/>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
