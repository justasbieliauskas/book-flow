import React, { Component } from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import Books from './Books';
import Chapters from './Chapters';
import Arguments from './Arguments';

import booksInMemory from './books/in-memory';
import booksInLocalStorage from './books/localStorage';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { books: this.props.books };
    
    this.addBook = this.addBook.bind(this);
    this.addChapter = this.addChapter.bind(this);
    this.addArgument = this.addArgument.bind(this);
  }

  addBook(title) {
    const books = booksInMemory.withNewBook(
      this.state.books,
      title
    );
    this.setState({ books });
    booksInLocalStorage.store(books);
  }

  addChapter(bookId, title) {
    const books = booksInMemory.withNewChapter(
      this.state.books,
      bookId,
      title
    );
    this.setState({ books });
    booksInLocalStorage.store(books);
  }

  addArgument(bookId, chapterId, argument) {
    const books = booksInMemory.withNewArgument(
      this.state.books,
      bookId,
      chapterId,
      argument
    );
    this.setState({ books });
    booksInLocalStorage.store(books);
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route
            path="/"
            exact
            render={() => <Books books={this.state.books} addNew={this.addBook} />}
          />
          <Route 
            path="/books/:bookId/chapters/:chapterId"
            render={props => {
              return (
                <Arguments
                  chapter="Chapter"
                  books={this.state.books}
                  bookId={parseInt(props.match.params.bookId)}
                  chapterId={parseInt(props.match.params.chapterId)}
                  add={this.addArgument}
                />
              );
            }}
          />
          <Route
            path="/books/:id"
            render={props => {
              return (
                <Chapters 
                  books={this.state.books}
                  id={parseInt(props.match.params.id)}
                  add={this.addChapter}
                />
              );
            }}
          />
        </Switch>
      </Router>
    );
  }
}
