import React from "react";

import { Car } from "../models/cars";

export type CarViewRowProps = {
  car: Car;
};

export function CarViewRow(props: CarViewRowProps) {
  return (
    <tr>
      <td>{props.car.id}</td>
      <td>{props.car.make}</td>
      <td>{props.car.model}</td>
      <td>{props.car.year}</td>
      <td>{props.car.color}</td>
      <td>{props.car.price}</td>
    </tr>
  );
}
