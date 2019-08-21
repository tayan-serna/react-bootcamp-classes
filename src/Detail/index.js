import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import FavoriteContext from '../Context/FavoriteContext';

const RickAndMortyAPI = 'https://rickandmortyapi.com/api/character/';

export default function Detail({ match, history }) {
  const { favoriteList, setFavoriteList } = useContext(FavoriteContext);
  const [character, setCharacter] = useState({});
  const [loading, setLoading] = useState(true);
  // const [favorite, setFavorite] = useState(false);

  useEffect(
    function fetchAPI() {
      console.log('here');
      axios.get(`${RickAndMortyAPI}${match.params.id}`).then(res => {
        setCharacter(res.data);
        setLoading(false);
      });
    },
    [match.params.id]
  );

  useEffect(() => {
    document.title = 'Rick and morty app';
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  const setFavorite = () => {
    // setFavorite(!favorite);
    const isFavoriteCharacter = favoriteList[character.id]
      ? !favoriteList[character.id]
      : true;
    favoriteList[character.id] = isFavoriteCharacter;
    setFavoriteList(favoriteList);
  };
  return (
    <div className="detail">
      <div className="image-container">
        {/* eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions, jsx-a11y/click-events-have-key-events*/}
        <span
          role="img"
          aria-label="back"
          className="detail__back"
          onClick={history.goBack}
        >
          🔙
        </span>
        <img
          alt={character.name}
          src={character.image}
          className="detail__image"
          onDoubleClick={setFavorite}
        />
        {favoriteList[character.id] && (
          <span role="img" aria-label="star" className="detail__favorite">
            ⭐
          </span>
        )}
      </div>
      <div className="detail__details">
        <div className="detail__item">
          <strong className="detail__label">NAME: </strong>{' '}
          <span className="datail_info">
            {character.name} <span>({character.status})</span>
          </span>
        </div>
        <div className="detail__item">
          <strong className="detail__label">SPECIE: </strong>{' '}
          <span className="datail_info">{character.species}</span>
        </div>
        <div className="detail__item">
          <strong className="detail__label">TYPE: </strong>{' '}
          <span className="datail_info">{character.type || 'N/A'}</span>
        </div>
        <div className="detail__item">
          <strong className="detail__label">GENDER: </strong>{' '}
          <span className="datail_info">{character.gender}</span>
        </div>
        <div className="detail__item">
          <strong className="detail__label">LOCATION: </strong>{' '}
          <span className="datail_info">{character.origin.name}</span>
        </div>
      </div>
    </div>
  );
}

Detail.propTypes = {
  match: PropTypes.object,
  history: PropTypes.object
};
