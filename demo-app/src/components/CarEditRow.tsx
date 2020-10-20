import React, { Component, ChangeEvent } from "react";

import { Car } from "../models/cars";

export type CarEditRowProps = {
  car: Car;
  onSaveCar: (car: Car) => void;
  onCancelCar: () => void;
};

export type CarEditRowState = {
  make: string;
  model: string;
  year: number;
  color: string;
  price: number;
};

export class CarEditRow extends Component<CarEditRowProps, CarEditRowState> {
  state = {
    make: this.props.car.make,
    model: this.props.car.model,
    year: this.props.car.year,
    color: this.props.car.color,
    price: this.props.car.price,
  };

  change = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({
      [e.target.name]:
        e.target.type === "number" ? Number(e.target.value) : e.target.value,
    } as Pick<CarEditRowState, keyof CarEditRowState>);
  };

  render() {
    return (
      <tr>
        <td>{this.props.car.id}</td>
        <td>
          <input
            type="text"
            id="make-input"
            name="make"
            value={this.state.make}
            onChange={this.change}
          />
        </td>
        <td>
          <input
            type="text"
            id="model-input"
            name="model"
            value={this.state.model}
            onChange={this.change}
          />
        </td>
        <td>
          <input
            type="number"
            id="year-input"
            name="year"
            value={this.state.year}
            onChange={this.change}
          />
        </td>
        <td>
          <input
            type="text"
            id="color-input"
            name="color"
            value={this.state.color}
            onChange={this.change}
          />
        </td>
        <td>
          <input
            type="number"
            id="price-input"
            name="price"
            value={this.state.price}
            onChange={this.change}
          />
        </td>
        <td>
          <button type="button" onClick={() => null}>
            Save
          </button>
          <button type="button" onClick={() => null}>
            Cancel
          </button>
        </td>
      </tr>
    );
  }
}
