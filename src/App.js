import React, { Component } from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import Books from './Books';
import Chapters from './Chapters';
import Arguments from './Arguments';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      books: [
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
      ],
    };
    
    this.addBook = this.addBook.bind(this);
    this.addChapter = this.addChapter.bind(this);
    this.addArgument = this.addArgument.bind(this);
  }

  addBook(title) {
    const books = this.state.books;
    const lastId = books[books.length - 1].id;
    this.setState({
      books: [
        ...books,
        {id: lastId + 1, title, chapters: []},
      ],
    });
  }

  addChapter(bookId, title) {
    const books = [...this.state.books];
    const book = books.find(book => book.id === bookId);
    const chapters = book.chapters;
    const lastId = chapters.length > 0 ? chapters[chapters.length - 1].id : -1;
    book.chapters.push({id: lastId + 1, title, arguments: []});
    this.setState({books});
  }

  addArgument(bookId, chapterId, argument) {
    const books = [...this.state.books];
    const book = books.find(book => book.id === bookId);
    const chapter = book.chapters.find(chapter => chapter.id === chapterId);
    chapter.arguments.push(argument);
    this.setState({books});
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
