import React from 'react';
import {
  TableContainer,
  Table,
  TableBody,
  Typography,
} from '@material-ui/core';

import { Car, ColHeaders } from '../models/Car';
import { CarsSort } from '../models/CarsSort';

import { CarEditRow } from './CarEditRow';
import { CarViewRow } from './CarViewRow';

import { CarTableHead } from './CarTableHead';

export type CarTableProps = {
  cars: Car[];
  editCarId: number;
  carsSort: CarsSort;
  onEditCar: (carId: number) => void;
  onDeleteCar: (carId: number) => void;
  onSaveCar: (car: Car) => void;
  onCancelCar: () => void;
  onSortCars: (col: keyof Car) => void;
};

const colHeaders: ColHeaders = [
  { id: 1, col: 'id', caption: 'Id' },
  { id: 2, col: 'make', caption: 'Make' },
  { id: 3, col: 'model', caption: 'Model' },
  { id: 4, col: 'year', caption: 'Year' },
  { id: 5, col: 'color', caption: 'Color' },
  { id: 6, col: 'price', caption: 'Price' },
];

export function CarTable({
  cars,
  editCarId,
  carsSort,
  onEditCar: editCar,
  onDeleteCar: deleteCar,
  onSaveCar: saveCar,
  onCancelCar: cancelCar,
  onSortCars: sortCars,
}: CarTableProps) {
  return (
    <TableContainer>
      <header>
        <Typography variant="h2">Car Table</Typography>
      </header>
      <Table>
        <CarTableHead
          colHeaders={colHeaders}
          carsSort={carsSort}
          sortCars={sortCars}
        />
        <TableBody>
          {cars.map((car) =>
            car.id === editCarId ? (
              <CarEditRow
                key={car.id}
                car={car}
                onSaveCar={saveCar}
                onCancelCar={cancelCar}
              />
            ) : (
              <CarViewRow
                key={car.id}
                car={car}
                onEditCar={editCar}
                onDeleteCar={deleteCar}
              />
            ),
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
