import React from "react";
import ReactDOM from "react-dom";
import pi, { doublePi, tripliPi } from "./math";

ReactDOM.render(
  <ul>
    <li>{pi}</li>
    <li>{doublePi()}</li>
    <li>{tripliPi()}</li>
  </ul>,
  document.getElementById("root")
);
