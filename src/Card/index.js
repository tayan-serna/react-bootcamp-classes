import React from 'react';
import PropTypes from 'prop-types';

class Card extends React.Component {
  render() {
    return (
      <li className="card">
        <img
          className="card__image"
          src={this.props.url}
          alt={this.props.name}
        />
        <div className="card__info">{this.props.name}</div>
      </li>
    );
  }
}

Card.propTypes = {
  name: PropTypes.string,
  url: PropTypes.string
};

Card.defaultProps = {
  name: 'Rick',
  url: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg'
};

export default Card;
