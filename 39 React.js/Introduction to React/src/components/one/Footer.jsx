import React from "react";

const name = "Theodore Pinto";
const year = new Date();

function Footer() {
  return (
    <div className="footer">
      <p>Created by {name}</p>
      <p>Copyright {year.getFullYear()}</p>
    </div>
  );
}

export default Footer;
