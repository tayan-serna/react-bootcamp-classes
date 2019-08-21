import { createContext } from 'react';

const FavoriteContext = createContext({
  favoriteList: {},
  setFavoriteList: () => {}
});

export default FavoriteContext;
