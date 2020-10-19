import React from "react";

import { Car } from "../models/cars";

import { ToolHeader } from "./ToolHeader";

export type CarToolProps = {
  cars: Car[];
};

export function CarTool(props: CarToolProps) {
  return (
    <>
      <ToolHeader headerText="Car Tool" />
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
            <tr key={car.id}>
              <td>{car.id}</td>
              <td>{car.make}</td>
              <td>{car.model}</td>
              <td>{car.year}</td>
              <td>{car.color}</td>
              <td>{car.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
