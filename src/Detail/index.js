import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

const RickAndMortyAPI = 'https://rickandmortyapi.com/api/character/';

export default class Detail extends React.Component {
  state = {
    character: {
      loading: true
    }
  };
  componentDidMount() {
    axios.get(`${RickAndMortyAPI}${this.props.match.params.id}`).then(res => {
      this.setState({
        character: {
          loading: false,
          ...res.data
        }
      });
    });
  }

  render() {
    const { character } = this.state;
    const { history } = this.props;
    if (character.loading) {
      return <span>Loading...</span>;
    }
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
          />
          <span role="img" aria-label="star" className="detail__favorite">
            ⭐
          </span>
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
}

Detail.propTypes = {
  match: PropTypes.object,
  history: PropTypes.object
};
