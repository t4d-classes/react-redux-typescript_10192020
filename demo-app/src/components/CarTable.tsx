import React from 'react';

import { Car } from '../models/cars';
import { CarViewRow } from './CarViewRow';
import { CarEditRow } from './CarEditRow';

export type CarTableProps = {
  cars: Car[];
  editCarId: number;
  onEditCar: (carId: number) => void;
  onDeleteCar: (carId: number) => void;
  onSaveCar: (car: Car) => void;
  onCancelCar: () => void;
};

export function CarTable(props: CarTableProps) {
  const carTableBody = (car: Car) => {
    if (car.id === props.editCarId) {
      return (
        <CarEditRow
          key={car.id}
          car={car}
          onSaveCar={props.onSaveCar}
          onCancelCar={props.onCancelCar}
        />
      );
    } else {
      return (
        <CarViewRow
          key={car.id}
          car={car}
          onEditCar={props.onEditCar}
          onDeleteCar={props.onDeleteCar}
        />
      );
    }
  };

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
      <tbody>{props.cars.map(carTableBody)}</tbody>
    </table>
  );
}

// {
//   props.cars.map((car) =>
//     car.id === props.editCarId ? (
//       <CarEditRow
//         key={car.id}
//         car={car}
//         onSaveCar={props.onSaveCar}
//         onCancelCar={props.onCancelCar}
//       />
//     ) : (
//       <CarViewRow
//         key={car.id}
//         car={car}
//         onEditCar={props.onEditCar}
//         onDeleteCar={props.onDeleteCar}
//       />
//     ),
//   );
// }
