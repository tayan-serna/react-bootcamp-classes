import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import Input from '../Input';
import Card from '../Card';

const RickAndMortyAPI = 'https://rickandmortyapi.com/api/character/';

class CardList extends React.Component {
  state = {
    value: '',
    characters: [],
    charactersFiltered: []
  };

  componentDidMount() {
    axios.get(RickAndMortyAPI).then(res => {
      this.setState({
        characters: res.data.results,
        charactersFiltered: res.data.results
      });
    });
  }

  handleChange = e => {
    e.persist();
    const charactersFiltered = this.state.characters.filter(chart =>
      chart.name.toLowerCase().includes(e.target.value)
    );
    console.log(typeof e.target.value);
    console.log(charactersFiltered);
    this.setState(() => ({
      value: e.target.value,
      charactersFiltered
    }));
  };

  render() {
    const { charactersFiltered } = this.state;
    return (
      <div className="list-container">
        <Input handleChange={this.handleChange} />
        <div>
          <ul className="card-container">
            {charactersFiltered.map(chart => (
              <Link to={`details/${chart.id}`} key={chart.id}>
                <Card name={chart.name} url={chart.image}>
                  {name => {
                    console.log(name);

                    return <button>{name}</button>;
                  }}
                </Card>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default CardList;
