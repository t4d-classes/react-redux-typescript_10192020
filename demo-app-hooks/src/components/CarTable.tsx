import React from "react";

import { Car, CarsOrder, CarKeys } from "../models/car";

import { CarViewRow } from "./CarViewRow";
import { CarEditRow } from "./CarEditRow";
import { CarTableCol } from "../models/carTable";

export type CarTableProps = {
  cars: Car[];
  editCarId: number;
  carsOrder: CarsOrder;
  onEditCar: (carId: number) => void;
  onDeleteCar: (carId: number) => void;
  onSaveCar: (car: Car) => void;
  onCancelCar: () => void;
  onSortCars: (carProp: CarKeys) => void;
};

const carTableCols: CarTableCol[] = [
  { id: 1, caption: "Id", column: "id" },
  { id: 2, caption: "Make", column: "make" },
  { id: 3, caption: "Model", column: "model" },
  { id: 4, caption: "Year", column: "year" },
  { id: 5, caption: "Body Color", column: "color" },
  { id: 6, caption: "Price", column: "price" },
];

export function CarTable({
  cars,
  editCarId,
  carsOrder,
  onEditCar: editCar,
  onDeleteCar: deleteCar,
  onSaveCar: saveCar,
  onCancelCar: cancelCar,
  onSortCars: sortCars,
}: CarTableProps) {
  return (
    <table>
      <thead>
        <tr>
          {carTableCols.map((carTableCol) => (
            <th key={carTableCol.id}>
              <button
                type="button"
                onClick={() => sortCars(carTableCol.column)}
              >
                {carTableCol.caption}
                {carsOrder.column === carTableCol.column &&
                  "(" + carsOrder.direction + ")"}
              </button>
            </th>
          ))}
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
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
          )
        )}
      </tbody>
    </table>
  );
}
