import React from "react";

const votes = Math.floor(Math.random() * 10);

function Stats() {
  return (
    <div>
      <p>
        There are {votes} votes. This is{" "}
        {votes % 2 === 0 ? "an even " : "an odd "}
        number.
      </p>
      <p>There are {`${votes}`} pineapples.</p>
    </div>
  );
}

export default Stats;
