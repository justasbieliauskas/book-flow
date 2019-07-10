import React, { Component } from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import Books from './Books';
import Chapters from './Chapters';
import Arguments from './Arguments';

export default class App extends Component {
  constructor() {
    super();
    this.books = [
      {
        id: 0,
        title: 'Code Ahead',
        chapters: [
          {
            id: 0,
            title: 'Adrian',
            arguments: [
              'First argument',
              'Second argument',
              'Argument number three',
            ],
          },
          {id: 1, title: 'Dennis'},
          {id: 2, title: 'Tony'},
        ],
      },
      {id: 1, title: '12 Rules For Life'},
      {id: 2, title: 'Homo Deus'},
    ];
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route
            path="/"
            exact
            render={() => <Books books={this.books} />}
          />
          <Route 
            path="/books/:bookId/chapters/:chapterId"
            render={props => {
              return (
                <Arguments
                  chapter="Chapter"
                  books={this.books}
                  bookId={parseInt(props.match.params.bookId)}
                  chapterId={parseInt(props.match.params.chapterId)}
                />
              );
            }}
          />
          <Route
            path="/books/:id"
            render={props => {
              return (
                <Chapters 
                  books={this.books}
                  id={parseInt(props.match.params.id)}
                />
              );
            }}
          />
        </Switch>
      </Router>
    );
  }
}
