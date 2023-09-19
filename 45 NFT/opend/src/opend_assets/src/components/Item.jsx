import React, { useEffect, useState } from "react";
import { Actor, HttpAgent } from "@dfinity/agent"
import { idlFactory } from "../../../declarations/nft/index";
import { Principal } from "@dfinity/principal"
import Button from "./Button";
import { opend } from "../../../declarations/opend/index";

function Item(props) {

  const [blur, setBlur] = useState()

  const [name, setName] = useState()
  const [owner, setOwner] = useState()
  const [image, setImage] = useState()
  const [button, setButton] = useState()
  const [priceInput, setPriceInput] = useState()
  const [isLoaderHidden , setLoaderHidden ] = useState(true)


  const localhost = "http://localhost:8080"
  const agent = new HttpAgent({host: localhost})
  agent.fetchRootKey()

  let NftActor
  async function loadNft() {
    NftActor = await Actor.createActor(idlFactory, {
      agent,
      canisterId: Principal.fromText(props.id)
    })

    setName(await NftActor.getName())
    setOwner((await NftActor.getOwner()).toText())

    const imageContent = new Uint8Array(await NftActor.getAsset())
    setImage(URL.createObjectURL(new Blob([imageContent.buffer], { type: "image/png"})))

    const isNftListed = await opend.isListed(Principal.fromText(props.id))
    if(isNftListed) {
      setBlur({filter: "blur(4px) "})
      setOwner("OpenD")
    } else
    setButton(<Button handleClick={handleSell} text={"Sell"}/>)
    
  }

  useEffect(() => loadNft(), [])

  let price;
  function handleSell() {
    setPriceInput(<input
      placeholder="Price in DANG"
      type="number"
      className="price-input"
      value={price}
      onChange={(e) => price=e.target.value}
    />)

    setButton(<Button handleClick={sellItem} text={"Confirm"}/>)
  }


  async function sellItem() {
    setBlur({filter: "blur(4px) "})
    setLoaderHidden(false)
    const listingResult = await opend.listItem(Principal.fromText(props.id), Number(price))
    console.log(listingResult)
    if (listingResult == "Success") {
      const openDId = await opend.getOpendCanisterId();
      const transferResult = await NftActor.transferOwnership(openDId)
      if (transferResult === "Success")
        setLoaderHidden(true)
        setButton()
        setPriceInput()
        setOwner("OpenD")
    }

  }

  return (
    <div className="disGrid-item">
      <div className="disPaper-root disCard-root makeStyles-root-17 disPaper-elevation1 disPaper-rounded">
        <img
          className="disCardMedia-root makeStyles-image-19 disCardMedia-media disCardMedia-img"
          src={image}
          style={blur}
        />
              <div hidden={isLoaderHidden} className="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
        <div className="disCardContent-root">
          <h2 className="disTypography-root makeStyles-bodyText-24 disTypography-h5 disTypography-gutterBottom">
            {name}
          </h2>
          <h2 className="disTypography-root makeStyles-bodyText-24 disTypography-h5 disTypography-gutterBottom">
            <span className="purple-text">{name !== "OpenD" ? "Listed" : ""}</span>
          </h2>
          <p className="disTypography-root makeStyles-bodyText-24 disTypography-body2 disTypography-colorTextSecondary">
            Owner: {owner}
          </p>
          {priceInput}
          {button}
        </div>
      </div>
    </div>
  );
}

export default Item;
