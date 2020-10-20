import React from "react";

import { Car } from "../models/cars";
import { CarViewRow } from "./CarViewRow";

export type CarTableProps = {
  cars: Car[];
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
        </tr>
      </thead>
      <tbody>
        {props.cars.map((car) => (
          <CarViewRow key={car.id} car={car} />
        ))}
      </tbody>
    </table>
  );
}
