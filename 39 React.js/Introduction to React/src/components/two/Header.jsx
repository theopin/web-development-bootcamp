import React from "react";

const hour = new Date().getHours();
let heading = "Good Morning";

const custStyle = {
  color: "red"
};

if (hour > 12 && hour < 6) {
  heading = "Good Afternoon";
  custStyle.color = "green";
} else if (hour > 6) {
  heading = "Good Evening";
  custStyle.color = "blue";
}
function Header() {
  return (
    <h1 className="heading" style={custStyle}>
      {heading}
    </h1>
  );
}

export default Header;
