import React, { Component } from 'react';

import { Car, NewCar } from '../models/cars';

import { ToolHeader } from './ToolHeader';
import { CarTable } from './CarTable';
import { CarForm } from './CarForm';

export type CarToolProps = {
  cars: Car[];
  editCarId: number;
  onAddCar: (car: NewCar) => void;
  onSaveCar: (car: Car) => void;
  onDeleteCar: (carId: number) => void;
  onEditCar: (carId: number) => void;
  onCancelCar: () => void;
};

export class CarTool extends Component<CarToolProps> {
  render() {
    return (
      <>
        <ToolHeader headerText="Car Tool" />
        <CarTable
          cars={this.props.cars}
          editCarId={this.props.editCarId}
          onEditCar={this.props.onEditCar}
          onDeleteCar={this.props.onDeleteCar}
          onSaveCar={this.props.onSaveCar}
          onCancelCar={this.props.onCancelCar}
        />
        <CarForm buttonText="Add Car" onSubmitCar={this.props.onAddCar} />
      </>
    );
  }
}
