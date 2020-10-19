// default import
import React from 'react';
import  { render } from 'react-dom';

// named import
import { HelloWorld } from './components/HelloWorld';

render(
  // - custom component, to reference the component we pass in the
  //   function object reference or the class reference
  // - "HelloWorld" is not being invoked here, the reference to the "HelloWorld"
  //   function is being passed in
  // - JSX - always start with an uppercase letter
  // React.createElement(HelloWorld),
  <HelloWorld />,
  document.querySelector('#root'),
);



