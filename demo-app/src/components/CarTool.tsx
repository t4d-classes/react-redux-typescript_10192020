import React, { Component } from "react";

import { Car } from "../models/cars";

import { ToolHeader } from "./ToolHeader";
import { CarTable } from "./CarTable";
import { CarForm } from "./CarForm";

export type CarToolProps = {
  cars: Car[];
};

export class CarTool extends Component<CarToolProps> {
  render() {
    return (
      <>
        <ToolHeader headerText="Car Tool" />
        <CarTable cars={this.props.cars} />
        <CarForm />
      </>
    );
  }
}
