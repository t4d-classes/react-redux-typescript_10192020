import React from 'react';

import { ToolHeader } from './ToolHeader';
import { CarTable } from './CarTable';
import { CarForm } from './CarForm';
import { ModalDialog } from './ModalDialog';
import { CarToolState } from '../models/carToolStore';
import { Car, CarKeys, NewCar } from '../models/car';

export type CarToolProps = CarToolState & {
  onAddCar: (car: NewCar) => void;
  onSaveCar: (car: Car) => void;
  onDeleteCar: (carId: number) => void;
  onEditCar: (carId: number) => void;
  onCancelCar: () => void;
  onSortCars: (col: CarKeys) => void;
  onRefreshCars: () => void;
};

export function CarTool(props: CarToolProps) {
  const {
    cars,
    editCarId,
    carsOrder,
    isLoading,
    onAddCar: addCar,
    onSaveCar: saveCar,
    onDeleteCar: deleteCar,
    onEditCar: editCar,
    onCancelCar: cancelCar,
    onSortCars: sortCars,
    onRefreshCars: refreshCars,
  } = props;
  return (
    <>
      <ToolHeader headerText="Car Tool" />
      <button type="button" onClick={refreshCars}>
        Refresh Cars
      </button>
      <CarTable
        cars={cars}
        editCarId={editCarId}
        carsOrder={carsOrder}
        onEditCar={editCar}
        onDeleteCar={deleteCar}
        onSaveCar={saveCar}
        onCancelCar={cancelCar}
        onSortCars={sortCars}
      />
      <CarForm buttonText="Add Car" onSubmitCar={addCar} />
      {isLoading && <ModalDialog>Please wait...</ModalDialog>}
    </>
  );
}
