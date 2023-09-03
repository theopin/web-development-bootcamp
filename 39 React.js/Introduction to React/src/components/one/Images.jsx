import React from "react";
import Card from "./Card";

const data = [
  {
    name: "card1",
    image: "https://picsum.photos/id/237/200/300",
    alt: "puppy",
    contact: 1234567,
    email: "email@abc.com"
  },
  {
    name: "card2",
    image: "https://picsum.photos/id/238/200/300",
    alt: "building",
    contact: 1234567,
    email: "email@abc.com"
  },
  {
    name: "card3",
    image: "https://picsum.photos/id/239/200/300",
    alt: "dandelion",
    contact: 1234567,
    email: "email@abc.com"
  },
]

function Images() {
  
  return (
    <div>
      <h2 style={{ color: "green" }}>Images</h2>
      {data.map(element => {
        console.log(33  )
      return (
      <Card key={element.name} name={element.name} image={element.image} alt={element.alt} contact={element.contact} email={element.email}/>
      /* key element only to be used by react, make sep id attribute */
      )
      })}
    </div>

  );
}

export default Images;
