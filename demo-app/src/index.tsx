// default import
import React from "react";
import { render } from "react-dom";

import { Color } from "./models/colors";

// named import
import { ColorTool } from "./components/ColorTool";
import { CarTool } from "./components/CarTool";

const colorList: Color[] = [
  { id: 1, name: "blue" },
  { id: 2, name: "purple" },
  { id: 3, name: "teal" },
  { id: 4, name: "fuschia" },
  { id: 5, name: "green" },
];

render(
  // - custom component, to reference the component we pass in the
  //   function object reference or the class reference
  // - "ColorTool" is not being invoked here, the reference to the "ColorTool"
  //   function is being passed in
  // - JSX - always start with an uppercase letter
  // React.createElement(ColorTool),
  <>
    <ColorTool colors={colorList} />
    <CarTool />
  </>,
  document.querySelector("#root")
);
