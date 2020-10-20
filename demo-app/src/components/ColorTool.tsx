import React, { Component } from "react";

import { Color, NewColor } from "../models/colors";

import { ToolHeader } from "./ToolHeader";
import { ColorForm } from "./ColorForm";

export type ColorToolProps = {
  colors: Color[];
};

export type ColorToolState = {
  colors: Color[];
};

export class ColorTool extends Component<ColorToolProps, ColorToolState> {
  state = {
    // copy of the array
    colors: [...this.props.colors],
  };

  addColor = (newColor: NewColor) => {
    this.setState({
      colors: [
        ...this.state.colors,
        {
          ...newColor,
          id: Math.max(...this.state.colors.map((c) => c.id), 0) + 1,
        },
      ],
    });
  };

  render() {
    return (
      <>
        <ToolHeader headerText="Color Tool" />
        <ul>
          {this.state.colors.map((color) => (
            <li key={color.id}>{color.name}</li>
          ))}
        </ul>
        <ColorForm buttonText="Add Color" onSubmitColor={this.addColor} />
      </>
    );
  }
}
