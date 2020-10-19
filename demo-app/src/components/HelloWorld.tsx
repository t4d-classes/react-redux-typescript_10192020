import React from 'react';

// this function is a component, because it returns a React Element
export function HelloWorld() {

  // output to the console
  // console.log('h1');

  // add a breakpoint which will then stop when the browser executes it
  // debugger;

  // intrinsic element, with ReactDOM, the HTML tags are all instrinsic
  // reference the instrinsic element using a string-based tag name
  // JSX - starts with lower case letter
  // return React.createElement('div', null,
  //   React.createElement('h1', null, 'Hello, World!'),
  //   React.createElement('span', null, 'test'));
  return (
    <>
      <h1>Hello, World!</h1>
      <span>test</span>
    </>
  );
}

// export default HelloWorld;