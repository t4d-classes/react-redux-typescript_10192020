import React, { Component } from 'react';

import { Car, NewCar } from '../models/cars';

import { ToolHeader } from './ToolHeader';
import { CarTable } from './CarTable';
import { CarForm } from './CarForm';

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
      editCarId: -1,
    });
  };

  saveCar = (car: Car) => {
    const newCars = [...this.state.cars];
    const carIndex = newCars.findIndex((c) => c.id === car.id);
    newCars[carIndex] = car;
    this.setState({
      cars: newCars,
      editCarId: -1,
    });
  };

  deleteCar = (carId: number) => {
    this.setState({
      cars: this.state.cars.filter((c) => c.id !== carId),
      editCarId: -1,
    });
  };

  editCar = (carId: number) => {
    this.setState({
      editCarId: carId,
    });
  };

  cancelCar = () => {
    this.setState({
      editCarId: -1,
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
          onSaveCar={this.saveCar}
          onCancelCar={this.cancelCar}
        />
        <CarForm buttonText="Add Car" onSubmitCar={this.addCar} />
      </>
    );
  }
}
