import React, { Component, ChangeEvent } from 'react';

import { NewColor } from '../models/colors';
import { withForm, TheComponentProps } from '../hocs/withForm';

export type ColorFormProps = {
  buttonText: string;
  onSubmitColor: (color: NewColor) => void;
} & TheComponentProps;

export type ColorForm = {
  name: string;
  hexcode: string;
};

export const ColorForm = withForm(
  class ColorForm extends Component<ColorFormProps> {
    submitColor = () => {
      this.props.onSubmitColor({ ...this.props.form });
      this.props.resetForm();
    };

    render() {
      console.log('getValue: ', this.props.getValue('name'));

      return (
        <form>
          <div>
            <label htmlFor="name-input">Name:</label>
            <input
              type="text"
              id="name-input"
              name="name"
              value={this.props.getValue('name')}
              onChange={this.props.change}
            />
          </div>
          <div>
            <label htmlFor="hexcode-input">Hexcode:</label>
            <input
              type="text"
              id="hexcode-input"
              name="hexcode"
              value={this.props.getValue('hexcode')}
              onChange={this.props.change}
            />
          </div>
          <button type="button" onClick={this.submitColor}>
            {this.props.buttonText}
          </button>
        </form>
      );
    }
  },
  {
    name: '',
    hexcode: '',
  },
);
