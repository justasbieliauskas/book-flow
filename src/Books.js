import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';

export default class Books extends Component {
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
        </ul>
      </Container>
    );
  }
}
