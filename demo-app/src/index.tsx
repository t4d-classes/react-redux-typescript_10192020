<<<<<<< HEAD
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
=======
// // default import
// import React from 'react';
// import { render } from 'react-dom';
// import { Provider } from 'react-redux';
>>>>>>> a00827e72211850ec67f1ebbbd3ce1e22fd598bd

// import { CalcToolContainer } from './containers/CalcToolContainer';
// import { calcToolStore } from './stores/calcToolStore';

<<<<<<< HEAD
import { CarToolContainer } from './containers/CarToolContainer';
import { carToolStore } from './stores/carToolStore';

import { ColorToolContainer } from './containers/ColorToolContainer';
import { colorToolStore } from './stores/colorToolStore';

render(
  <>
    <Provider store={calcToolStore}>
      <CalcToolContainer />
    </Provider>
    <Provider store={carToolStore}>
      <CarToolContainer />
    </Provider>
    <Provider store={colorToolStore}>
      <ColorToolContainer />
    </Provider>
  </>,
  document.querySelector('#root'),
);
=======
// render(
//   <Provider store={calcToolStore}>
//     <CalcToolContainer />
//   </Provider>,
//   document.querySelector('#root'),
// );
>>>>>>> a00827e72211850ec67f1ebbbd3ce1e22fd598bd
