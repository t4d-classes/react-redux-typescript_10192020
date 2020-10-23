import React, { Component } from 'react';

import { Color, NewColor } from '../models/colors';

import { ToolHeader } from './ToolHeader';
import { ColorForm } from './ColorForm';

export type ColorToolProps = {
  colors: Color[];
  onAddColor: (color: NewColor) => void;
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
        <ColorForm
          buttonText="Add Color"
          onSubmitColor={this.props.onAddColor}
        />
      </>
    );
  }
}
