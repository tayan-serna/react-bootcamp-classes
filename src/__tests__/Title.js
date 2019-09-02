import React from 'react';
import ReactDOM from 'react-dom';

import Title from '../Title';

test('Should render', () => {
  const container = document.createElement('div');
  ReactDOM.render(<Title />, container);
  expect(container.textContent).toEqual('RICK AND MORTY');
});
