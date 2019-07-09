import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

import Books from './Books';

export default class App extends Component {
  constructor() {
    super();
    this.books = [
      {title: 'Code Ahead'},
      {title: '12 Rules For Life'},
    ];
  }

  render() {
    return (
      <Router>
        <Route
          path="/"
          exact
          render={() => <Books books={this.books} />}
        />
      </Router>
    );
  }
}
