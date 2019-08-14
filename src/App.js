import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Title from './Title';
import CardList from './CardList';
import Detail from './Detail';

import './index.scss';

const App = () => {
  return (
    <section>
      <Title />
      <section className="container">
        <Router>
          <Route exact path="/" component={CardList} />
          <Route path="/details/:id" component={Detail} />
        </Router>
      </section>
    </section>
  );
};

export default App;
