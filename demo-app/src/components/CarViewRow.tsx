import React from "react";

import { Car } from "../models/cars";

export type CarViewRowProps = {
  car: Car;
  onEditCar: (carId: number) => void;
  onDeleteCar: (carId: number) => void;
};

export function CarViewRow(props: CarViewRowProps) {
  const editCar = () => {
    props.onEditCar(props.car.id);
  };

  const deleteCar = () => {
    props.onDeleteCar(props.car.id);
  };

  return (
    <tr>
      <td>{props.car.id}</td>
      <td>{props.car.make}</td>
      <td>{props.car.model}</td>
      <td>{props.car.year}</td>
      <td>{props.car.color}</td>
      <td>{props.car.price}</td>
      <td>
        <button type="button" onClick={editCar}>
          Edit
        </button>
        <button type="button" onClick={deleteCar}>
          Delete
        </button>
      </td>
    </tr>
  );
}
