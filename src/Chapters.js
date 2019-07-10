import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';

export default class Chapters extends Component {
  render() {
    const withId = book => book.id === this.props.id;
    const book = this.props.books.find(withId);
    return (
      <Container>
        <h1>{book.title}</h1>
        <ul>
          {book.chapters.map(chapter => {
            return (
              <li key={chapter.id}>
                <Link to={`/books/${book.id}/chapters/${chapter.id}`}>
                  {chapter.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </Container>
    );
  }
}
