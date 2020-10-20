import React, { Component } from "react";

import { Color } from "../models/colors";

import { ToolHeader } from "./ToolHeader";
import { ColorForm } from "./ColorForm";

export type ColorToolProps = {
  colors: Color[];
};

export class ColorTool extends Component<ColorToolProps> {
  render() {
    return (
      <>
        <ToolHeader headerText="Color Tool" />
        <ul>
          {this.props.colors.map((color) => (
            <li key={color.id}>{color.name}</li>
          ))}
        </ul>
        <ColorForm />
      </>
    );
  }
}
