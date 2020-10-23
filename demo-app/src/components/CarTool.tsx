import React, { Component } from 'react';

import { Car, NewCar } from '../models/cars';

import { ToolHeader } from './ToolHeader';
import { CarTable } from './CarTable';
import { CarForm } from './CarForm';
import { ModalDialog } from './ModalDialog';

export type CarToolProps = {
  cars: Car[];
  editCarId: number;
  isLoading: boolean;
  onAddCar: (car: NewCar) => void;
  onSaveCar: (car: Car) => void;
  onDeleteCar: (carId: number) => void;
  onEditCar: (carId: number) => void;
  onCancelCar: () => void;
  onRefreshCars: () => void;
};

export class CarTool extends Component<CarToolProps> {
  componentDidMount() {
    this.props.onRefreshCars();
  }

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
        {this.props.isLoading && <ModalDialog>Loading...</ModalDialog>}
      </>
    );
  }
}
