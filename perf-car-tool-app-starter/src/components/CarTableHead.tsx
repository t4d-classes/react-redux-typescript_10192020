import React, { memo } from 'react';

import { TableHead, TableRow, TableCell } from '@material-ui/core';

import { ColHeader } from './ColHeader';
import { ColHeaders, CarKeys } from '../models/Car';
import { CarsSort } from '../models/CarsSort';

export type CarTableHeadProps = {
  colHeaders: ColHeaders;
  carsSort: CarsSort;
  sortCars: (col: CarKeys) => void;
};

export const CarTableHead = memo(function CarTableHead(
  props: CarTableHeadProps,
) {
  return (
    <TableHead>
      <TableRow>
        {props.colHeaders.map((colHeader) => (
          <ColHeader
            key={colHeader.id}
            carsSort={props.carsSort}
            col={colHeader.col}
            caption={colHeader.caption}
            onClick={props.sortCars}
          />
        ))}
        <TableCell>Actions</TableCell>
      </TableRow>
    </TableHead>
  );
});
