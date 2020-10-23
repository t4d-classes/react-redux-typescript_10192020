import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { CarToolAppState } from '../models/cars';
import {
  createAddCarAction,
  createSaveCarAction,
  createDeleteCarAction,
  createEditCarAction,
  createCancelCarAction,
} from '../actions/carToolActions';
import { CarTool } from '../components/CarTool';

const mapStateToProps = (state: CarToolAppState) => {
  return {
    cars: state.cars,
    editCarId: state.editCarId,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      onAddCar: createAddCarAction,
      onSaveCar: createSaveCarAction,
      onDeleteCar: createDeleteCarAction,
      onEditCar: createEditCarAction,
      onCancelCar: createCancelCarAction,
    },
    dispatch,
  );

const createCarToolContainer = connect(mapStateToProps, mapDispatchToProps);

export const CarToolContainer = createCarToolContainer(CarTool);
