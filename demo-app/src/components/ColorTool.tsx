import React from 'react';

import { Color } from '../models/colors';

export function ColorTool() {

  const colors: Color[] = [
    { id: 1, name: 'blue' },
    { id: 2, name: 'purple' },
    { id: 3, name: 'teal' },
    { id: 4, name: 'fuschia' },
    { id: 5, name: 'green' },
  ];

  // very imperative - both the what and the how

  // const colorListItems: JSX.Element[] = [];

  // traditional for-loop, there is no semantic meaning
  // for (let x=0; x<colors.length; x++) {
  //   const colorListItem = <li>{colors[x].name}</li>;

  //   colorListItems.push(colorListItem);
  // }

  // more declarative approach
  // iterating over a collection and performing a side-effect with each item
  // colors.forEach((color) => {
  //   const colorListItem = <li>{color.name}</li>;
  //   colorListItems.push(colorListItem);
  // });

  // declarative and the semantic meaning is to transform one array in to another array
  // const colorListItems = colors.map(color => <li>{color.name}</li>);

  return (
    <>
      <header>
        <h1>
          Color Tool
        </h1>
      </header>
      <ul>
        {colors.map(color => <li key={color.id}>{color.name}</li>)}
      </ul>
    </>
  );

}