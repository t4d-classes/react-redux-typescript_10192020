import React from 'react';
import { render } from '@testing-library/react';

import { Car, CarsOrder, ORDER_ASC } from '../models/car';
import { CarTable } from './CarTable';

jest.mock('./CarViewRow');
jest.mock('./CarEditRow');

describe('CarTable render', () => {
  let cars: Car[];
  let carsOrder: CarsOrder;

  beforeEach(() => {
    carsOrder = {
      column: 'id',
      direction: ORDER_ASC,
    };
    cars = [
      {
        id: 1,
        make: 'Ford',
        model: 'Fusion Hybrid',
        year: 2020,
        color: 'blue',
        price: 45000,
      },
      {
        id: 2,
        make: 'Tesla',
        model: 'S',
        year: 2019,
        color: 'red',
        price: 120000,
      },
    ];
  });

  test('render', () => {
    const { debug } = render(
      <CarTable
        cars={cars}
        editCarId={-1}
        carsOrder={carsOrder}
        onEditCar={() => null}
        onDeleteCar={() => null}
        onSaveCar={() => null}
        onCancelCar={() => null}
        onSortCars={() => null}
      />,
    );

    debug();
  });
});
