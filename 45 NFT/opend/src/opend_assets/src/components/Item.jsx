import React, { useEffect, useState } from "react";
import logo from "../../assets/logo.png";
import { Actor, HttpAgent } from "@dfinity/agent"
import { idlFactory } from "../../../declarations/nft/index";
import { Principal } from "@dfinity/principal"

function Item(props) {

  const [name, setName] = useState()
  const [owner, setOwner] = useState()
  const [image, setImage] = useState()

  const localhost = "http://localhost:8080"
  const agent = new HttpAgent({host: localhost})

  async function loadNft() {
    const NftActor = await Actor.createActor(idlFactory, {
      agent,
      canisterId: Principal.fromText(props.id)
    })

    setName(await NftActor.getName())
    setOwner((await NftActor.getOwner()).toText())

    const imageContent = new Uint8Array(await NftActor.getAsset())
    setImage(URL.createObjectURL(new Blob([imageContent.buffer], { type: "image/png"})))

    
  }

  useEffect(() => loadNft(), [])

  return (
    <div className="disGrid-item">
      <div className="disPaper-root disCard-root makeStyles-root-17 disPaper-elevation1 disPaper-rounded">
        <img
          className="disCardMedia-root makeStyles-image-19 disCardMedia-media disCardMedia-img"
          src={image}
        />
        <div className="disCardContent-root">
          <h2 className="disTypography-root makeStyles-bodyText-24 disTypography-h5 disTypography-gutterBottom">
            {name}<span className="purple-text"></span>
          </h2>
          <p className="disTypography-root makeStyles-bodyText-24 disTypography-body2 disTypography-colorTextSecondary">
            Owner: {owner}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Item;
