import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { CarToolAppState } from '../models/cars';
import {
  addCar,
  saveCar,
  deleteCar,
  createEditCarAction,
  createCancelCarAction,
  refreshCars,
} from '../actions/carToolActions';
import { CarTool } from '../components/CarTool';

const mapStateToProps = (state: CarToolAppState) => {
  return {
    isLoading: state.isLoading,
    cars: state.cars,
    editCarId: state.editCarId,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      onRefreshCars: refreshCars,
      onAddCar: addCar,
      onSaveCar: saveCar,
      onDeleteCar: deleteCar,
      onEditCar: createEditCarAction,
      onCancelCar: createCancelCarAction,
    },
    dispatch,
  );

const createCarToolContainer = connect(mapStateToProps, mapDispatchToProps);

export const CarToolContainer = createCarToolContainer(CarTool);
