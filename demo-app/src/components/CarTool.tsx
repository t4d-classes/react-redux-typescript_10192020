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
  editCarId: number;
};

export class CarTool extends Component<CarToolProps, CarToolState> {
  state = {
    cars: [...this.props.cars],
    editCarId: -1,
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

  editCar = (carId: number) => {
    this.setState({
      editCarId: carId,
    });
  };

  render() {
    return (
      <>
        <ToolHeader headerText="Car Tool" />
        <CarTable
          cars={this.state.cars}
          editCarId={this.state.editCarId}
          onEditCar={this.editCar}
          onDeleteCar={this.deleteCar}
        />
        <CarForm buttonText="Add Car" onSubmitCar={this.addCar} />
      </>
    );
  }
}
