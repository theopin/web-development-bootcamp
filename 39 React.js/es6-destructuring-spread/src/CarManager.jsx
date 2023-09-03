import React from "react";

import cars from "./practice";

const [honda, tesla] = cars;
console.log(cars[0]);
const {
  coloursByPopularity: hondaColours,
  speedStats: { topSpeed: hondaTopSpeed }
} = honda;

const {
  coloursByPopularity: teslaColours,
  speedStats: { topSpeed: teslaTopSpeed }
} = tesla;

const [teslaTopColour] = teslaColours;

const [hondaTopColour] = hondaColours;

function CarManager() {
  return (
    <table>
      <tr>
        <th>Brand</th>
        <th>Top Speed</th>
        <th>Top Colour</th>
      </tr>
      <tr>
        <td>{tesla.model}</td>
        <td>{teslaTopSpeed}</td>
        <td>{teslaTopColour}</td>
      </tr>
      <tr>
        <td>{honda.model}</td>
        <td>{hondaTopSpeed}</td>
        <td>{hondaTopColour}</td>
      </tr>
    </table>
  );
}

export default CarManager;
