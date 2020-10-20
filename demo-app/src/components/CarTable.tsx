import React from "react";

import { Car } from "../models/cars";
import { CarViewRow } from "./CarViewRow";
import { CarEditRow } from "./CarEditRow";

export type CarTableProps = {
  cars: Car[];
  editCarId: number;
  onEditCar: (carId: number) => void;
  onDeleteCar: (carId: number) => void;
};

export function CarTable(props: CarTableProps) {
  return (
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Make</th>
          <th>Model</th>
          <th>Year</th>
          <th>Color</th>
          <th>Price</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {props.cars.map((car) =>
          car.id === props.editCarId ? (
            <CarEditRow
              key={car.id}
              car={car}
              onSaveCar={() => null}
              onCancelCar={() => null}
            />
          ) : (
            <CarViewRow
              key={car.id}
              car={car}
              onEditCar={props.onEditCar}
              onDeleteCar={props.onDeleteCar}
            />
          )
        )}
      </tbody>
    </table>
  );
}
