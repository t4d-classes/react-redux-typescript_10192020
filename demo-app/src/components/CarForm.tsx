import React, { Component } from 'react';
import { NewCar } from '../models/cars';

import { withForm, FormComponentProps } from '../hocs/withForm';

type CarForm = {
  make: string;
  model: string;
  year: number;
  color: string;
  price: number;
};

export type CarFormProps = {
  buttonText: string;
  onSubmitCar: (newCar: NewCar) => void;
} & FormComponentProps<CarForm>;

const getInitialState = () =>
  ({
    make: '',
    model: '',
    year: 1900,
    color: '',
    price: 0,
  } as CarForm);

export const CarForm = withForm(
  class CarForm extends Component<CarFormProps> {
    submitCar = () => {
      this.props.onSubmitCar({ ...this.props.form });
      this.props.resetForm();
    };

    render() {
      return (
        <form>
          <div>
            <label htmlFor="make-input">Make:</label>
            <input
              type="text"
              id="make-input"
              name="make"
              value={this.props.getValue('make')}
              onChange={this.props.change}
            />
          </div>
          <div>
            <label htmlFor="model-input">Model:</label>
            <input
              type="text"
              id="model-input"
              name="model"
              value={this.props.getValue('model')}
              onChange={this.props.change}
            />
          </div>
          <div>
            <label htmlFor="year-input">Year:</label>
            <input
              type="number"
              id="year-input"
              name="year"
              value={this.props.getValue('year')}
              onChange={this.props.change}
            />
          </div>
          <div>
            <label htmlFor="color-input">Color:</label>
            <input
              type="text"
              id="color-input"
              name="color"
              value={this.props.getValue('color')}
              onChange={this.props.change}
            />
          </div>
          <div>
            <label htmlFor="price-input">Price:</label>
            <input
              type="number"
              id="price-input"
              name="price"
              value={this.props.getValue('price')}
              onChange={this.props.change}
            />
          </div>
          <button type="button" onClick={this.submitCar}>
            {this.props.buttonText}
          </button>
        </form>
      );
    }
  },
  getInitialState(),
);
