// default import
import React from "react";
import { render } from "react-dom";

import { Color } from "./models/colors";
import { Car } from "./models/cars";

// named import
import { ColorTool } from "./components/ColorTool";
import { CarTool } from "./components/CarTool";

const colorList: Color[] = [
  { id: 1, name: "blue", hexcode: "0000FF" },
  { id: 2, name: "purple", hexcode: "0000FF" },
  { id: 3, name: "teal", hexcode: "0000FF" },
  { id: 4, name: "fuschia", hexcode: "0000FF" },
  { id: 5, name: "green", hexcode: "0000FF" },
];

const carList: Car[] = [
  {
    id: 1,
    make: "Ford",
    model: "Fusion Hybrid",
    year: 2020,
    color: "blue",
    price: 45000,
  },
  {
    id: 2,
    make: "Tesla",
    model: "S",
    year: 2019,
    color: "red",
    price: 120000,
  },
];

render(
  // - custom component, to reference the component we pass in the
  //   function object reference or the class reference
  // - "ColorTool" is not being invoked here, the reference to the "ColorTool"
  //   function is being passed in
  // - JSX - always start with an uppercase letter
  // React.createElement(ColorTool),
  <>
    {/* React.createElement(ColorTool, { colors: colorList }) */}
    <ColorTool colors={colorList} />
    <CarTool cars={carList} />
  </>,
  document.querySelector("#root")
);
