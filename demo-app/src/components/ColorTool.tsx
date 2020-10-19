import React from "react";

import { Color } from "../models/colors";

import { ToolHeader } from "./ToolHeader";

export type ColorToolProps = {
  colors: Color[];
  [x: string]: any;
};

export function ColorTool(props: ColorToolProps) {
  // what would happen to the developer?
  // props.colors.push({ id: 6, name: "orange" });

  console.log(Object.isFrozen(props));

  // props.newProp = "test";
  // props.colors = [];

  // very imperative - both the what and the how

  // const colorListItems: JSX.Element[] = [];

  // traditional for-loop, there is no semantic meaning
  // for (let x=0; x<colors.length; x++) {
  //   const colorListItem = <li>{colors[x].name}</li>;

  //   colorListItems.push(colorListItem);
  // }

  // more declarative approach
  // iterating over a collection and performing a side-effect with each item
  // colors.forEach((color) => {
  //   const colorListItem = <li>{color.name}</li>;
  //   colorListItems.push(colorListItem);
  // });

  // declarative and the semantic meaning is to transform one array in to another array
  // const colorListItems = colors.map(color => <li>{color.name}</li>);

  return (
    <>
      <ToolHeader headerText="Color Tool" />
      <ul>
        {props.colors.map((color) => (
          <li key={color.id}>{color.name}</li>
        ))}
      </ul>
    </>
  );
}
