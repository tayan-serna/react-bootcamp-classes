import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Title from './Title';
import CardList from './CardList';
import Detail from './Detail';

import FavoriteContext from './Context/FavoriteContext';
import FilterContext from './Context/FilterContext';

import './index.scss';

class App extends Component {
  handleFavorite = newObj => {
    this.setState({
      ...this.state,
      favoriteList: {
        ...this.state.favoriteList,
        ...newObj
      }
    });
  };

  state = {
    favoriteState: {
      favoriteList: {},
      setFavoriteList: newVal => {
        this.setState({
          ...this.state,
          favoriteState: {
            ...this.state.favoriteState,
            ...newVal
          }
        });
      }
    },
    filterState: {
      characters: [],
      filteredCharacters: [],
      filterValue: '',
      setFilterObject: newObj => {
        this.setState({
          ...this.state,
          filterState: {
            ...this.state.filterState,
            ...newObj
          }
        });
      }
    }
  };

  render() {
    return (
      <section>
        <Title />
        <section className="container">
          <Router>
            <FilterContext.Provider value={this.state.filterState}>
              <Route exact path="/" component={CardList} />
            </FilterContext.Provider>
            <FavoriteContext.Provider value={this.state.favoriteState}>
              <Route path="/details/:id" component={Detail} />
            </FavoriteContext.Provider>
          </Router>
        </section>
      </section>
    );
  }
}

export default App;
