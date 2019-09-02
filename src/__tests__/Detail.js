import React from 'react';
import { render, act, fireEvent } from '@testing-library/react';
// import { act } from 'react-dom/test-utils';
import axiosMock from 'axios';

import Detail from '../Detail';
import FavoriteContext from '../Context/FavoriteContext';

test('Should render Properly', async () => {
  const RickAndMortyAPI = 'https://rickandmortyapi.com/api/character/';
  const fakeFavoriteContext = {
    favoriteList: {},
    setFavoriteList: jest.fn()
  };

  const fakeHistory = {
    goBack: jest.fn()
  };
  const fakeMatch = {
    params: {
      id: '1'
    }
  };

  let fakeData = {
    id: 1,
    name: 'Rick Sanchez',
    status: 'Alive',
    species: 'Human',
    type: '',
    gender: 'Male',
    origin: {
      name: 'Earth (C-137)',
      url: 'https://rickandmortyapi.com/api/location/1'
    },
    location: {
      name: 'Earth (Replacement Dimension)',
      url: 'https://rickandmortyapi.com/api/location/20'
    },
    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg'
  };
  let containerUtils;
  axiosMock.get.mockResolvedValueOnce({
    data: fakeData
  });

  await act(async () => {
    containerUtils = render(
      <FavoriteContext.Provider value={fakeFavoriteContext}>
        <Detail history={fakeHistory} match={fakeMatch} />
      </FavoriteContext.Provider>
    );
  });

  const imageNode = containerUtils.getByAltText(fakeData.name);
  let favoriteNode = containerUtils.queryByTestId('detail-favorite');

  expect(favoriteNode).toBeNull();

  expect(imageNode.src).toEqual(fakeData.image);
  expect(axiosMock.get).toHaveBeenCalledTimes(1);
  expect(axiosMock.get).toHaveBeenCalledWith(
    `${RickAndMortyAPI}${fakeMatch.params.id}`
  );

  fireEvent.doubleClick(imageNode);

  await act(async () => {
    containerUtils.rerender(
      <FavoriteContext.Provider value={fakeFavoriteContext}>
        <Detail history={fakeHistory} match={fakeMatch} />
      </FavoriteContext.Provider>
    );
  });

  favoriteNode = containerUtils.queryByTestId('detail-favorite');

  expect(favoriteNode).toBeTruthy();
  expect(fakeFavoriteContext.setFavoriteList).toHaveBeenCalledTimes(1);
});
