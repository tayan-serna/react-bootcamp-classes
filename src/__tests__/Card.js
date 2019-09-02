import React from 'react';
// import { act } from 'react-dom/test-utils';
import { render } from '@testing-library/react';

import Card from '../Card';

test('should render without crash', () => {
  const { getByTestId, rerender } = render(<Card />);
  let imageNode = getByTestId('card-image');
  let infoNode = getByTestId('card-info');
  expect(imageNode.src).toEqual(
    'https://rickandmortyapi.com/api/character/avatar/1.jpeg'
  );
  expect(infoNode.textContent).toEqual('Rick');

  rerender(<Card name="Adrian" url="http://www.someurl.com/" />);

  imageNode = getByTestId('card-image');
  infoNode = getByTestId('card-info');

  expect(imageNode.src).toEqual('http://www.someurl.com/');
  expect(infoNode.textContent).toEqual('Adrian');
});
