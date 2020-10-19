// default import
import React from 'react';
import  { render } from 'react-dom';

// named import
import { ColorTool } from './components/ColorTool';
import { CarTool } from './components/CarTool';

render(
  // - custom component, to reference the component we pass in the
  //   function object reference or the class reference
  // - "ColorTool" is not being invoked here, the reference to the "ColorTool"
  //   function is being passed in
  // - JSX - always start with an uppercase letter
  // React.createElement(ColorTool),
  <>
    <ColorTool />
    <CarTool />
  </>,
  document.querySelector('#root'),
);



