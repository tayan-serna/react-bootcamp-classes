import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import Input from '../Input';
import Card from '../Card';

import FilterContext from '../Context/FilterContext';

const RickAndMortyAPI = 'https://rickandmortyapi.com/api/character/';

class CardList extends React.Component {
  componentDidMount() {
    if (!this.context.characters.length) {
      axios.get(RickAndMortyAPI).then(res => {
        this.context.setFilterObject({
          characters: res.data.results,
          filteredCharacters: res.data.results
        });
      });
    }
  }

  handleChange = e => {
    e.persist();
    const filteredCharacters = e.target.value
      ? this.context.characters.filter(chart =>
          chart.name.toLowerCase().includes(e.target.value.toLowerCase())
        )
      : this.context.characters;
    this.context.setFilterObject({
      filterValue: e.target.value,
      filteredCharacters
    });
  };

  render() {
    const { filteredCharacters, filterValue } = this.context;
    return (
      <div className="list-container">
        <Input handleChange={this.handleChange} value={filterValue} />
        <div>
          <ul className="card-container">
            {filteredCharacters.map(chart => (
              <Link to={`details/${chart.id}`} key={chart.id}>
                <Card name={chart.name} url={chart.image} />
              </Link>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

CardList.contextType = FilterContext;

export default CardList;
