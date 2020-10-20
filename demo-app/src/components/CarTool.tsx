import React, { Component } from "react";

import { Car, NewCar } from "../models/cars";

import { ToolHeader } from "./ToolHeader";
import { CarTable } from "./CarTable";
import { CarForm } from "./CarForm";

export type CarToolProps = {
  cars: Car[];
};

export type CarToolState = {
  cars: Car[];
};

export class CarTool extends Component<CarToolProps, CarToolState> {
  state = {
    cars: [...this.props.cars],
  };

  addCar = (newCar: NewCar) => {
    this.setState({
      cars: [
        ...this.state.cars,
        {
          ...newCar,
          id: Math.max(...this.state.cars.map((c) => c.id), 0) + 1,
        },
      ],
    });
  };

  deleteCar = (carId: number) => {
    this.setState({
      cars: this.state.cars.filter((c) => c.id !== carId),
    });
  };

  render() {
    return (
      <>
        <ToolHeader headerText="Car Tool" />
        <CarTable cars={this.state.cars} onDeleteCar={this.deleteCar} />
        <CarForm buttonText="Add Car" onSubmitCar={this.addCar} />
      </>
    );
  }
}
