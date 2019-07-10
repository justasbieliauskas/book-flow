import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';

export default class Arguments extends Component {
    get chapter() {
      const withBookId = book => book.id === this.props.bookId;
      const withChapterId = chapter => chapter.id === this.props.chapterId;
      const book = this.props.books.find(withBookId);
      return book.chapters.find(withChapterId);
    }

    render() {
      const chapter = this.chapter;
      return (
        <Container>
          <h1>{chapter.title}</h1>
          <ul>
            {chapter.arguments.map((argument, index) => {
              return (
                <li key={index}>
                  {argument}
                </li>
              );
            })}
          </ul>
        </Container>
      );
    }
}
