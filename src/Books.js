import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';

import AddNew from './AddNew';

export default class Books extends Component {
  constructor(props) {
    super(props);
    this.printBook = this.printBook.bind(this);
  }

  printBook(title) {
    console.log('Title is: ' + title);
  }

  render() {
    return (
      <Container>
        <h1>Books</h1>
        <ul>
          {this.props.books.map(book => {
            return (
              <li key={book.id}>
                <Link to={'/books/' + book.id}>
                  {book.title}
                </Link>
              </li>
            );
          })}
          <li>
            <AddNew
              placeholder="Book title"
              add={this.printBook}
            />
          </li>
        </ul>
      </Container>
    );
  }
}
