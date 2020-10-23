import React, { useEffect, useMemo } from 'react';
import { bindActionCreators } from 'redux';
import { useSelector, useDispatch } from 'react-redux';

import * as CarToolActions from '../actions/carToolActions';

import { Car, CarsOrder } from '../models/car';
import { CarToolState } from '../models/carToolStore';
import { CarTool } from '../components/CarTool';
import { carsSelector } from '../selectors/carToolSelectors';

export function CarToolContainer() {
  const stateData = {
    cars: useSelector<CarToolState, Car[]>(carsSelector),
    editCarId: useSelector<CarToolState, number>((state) => state.editCarId),
    isLoading: useSelector<CarToolState, boolean>((state) => state.isLoading),
    carsOrder: useSelector<CarToolState, CarsOrder>((state) => state.carsOrder),
  };

  const dispatch = useDispatch();

  const boundActions = useMemo(
    () =>
      bindActionCreators(
        {
          onRefreshCars: CarToolActions.refreshCars,
          onAddCar: CarToolActions.appendCar,
          onSaveCar: CarToolActions.replaceCar,
          onDeleteCar: CarToolActions.removeCar,
          onEditCar: CarToolActions.createEditCarAction,
          onCancelCar: CarToolActions.createCancelCarAction,
          onSortCars: CarToolActions.createSortCarsAction,
        },
        dispatch,
      ),
    [dispatch],
  );

  useEffect(() => {
    boundActions.onRefreshCars();
  }, [boundActions]);

  return <CarTool {...stateData} {...boundActions} />;
}
