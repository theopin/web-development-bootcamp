import React, {useState, useEffect} from "react";
import Item from "./Item";

function Gallery(props) {
  const NftId = "rkp4c-7iaaa-aaaaa-aaaca-cai"
  const [items, setItems] = useState()

  function fetchNfts() {
    if(props.ids !== undefined) {
      setItems(
        props.ids.map((NftId => (<Item id={NftId.toText()} key={NftId.toText()}/>)))
      )
    }
  }

  useEffect(() => fetchNfts(), [])

  return (
    <div className="gallery-view">
      <h3 className="makeStyles-title-99 Typography-h3">{props.title}</h3>
      <div className="disGrid-root disGrid-container disGrid-spacing-xs-2">
        <div className="disGrid-root disGrid-item disGrid-grid-xs-12">
          <div className="disGrid-root disGrid-container disGrid-spacing-xs-5 disGrid-justify-content-xs-center">
          {items}
          </div>

        </div>
      </div>
    </div>
  );
}

export default Gallery;
