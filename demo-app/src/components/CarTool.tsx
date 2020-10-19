import React from 'react';

export function CarTool() {

  return (
    <>
    <header>
      <h1>
        Car Tool
      </h1>
    </header>
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
        <tr>
          <td>1</td>
          <td>Ford</td>
          <td>Fusion Hybrid</td>
          <td>2018</td>
          <td>red</td>
          <td>45000</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Tesla</td>
          <td>S</td>
          <td>2019</td>
          <td>blue</td>
          <td>100000</td>
        </tr>
      </tbody>
    </table>
    </>
  );

}