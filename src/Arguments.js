import React, { Component } from 'react';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

import Back from './Back';
import AddNew from './AddNew';

export default class Arguments extends Component {
  constructor(props) {
    super(props);
    this.handleAdd = this.handleAdd.bind(this);
  }

  get chapter() {
    const withBookId = book => book.id === this.props.bookId;
    const withChapterId = chapter => chapter.id === this.props.chapterId;
    const book = this.props.books.find(withBookId);
    return book.chapters.find(withChapterId);
  }

  handleAdd(argument) {
    this.props.add(
      this.props.bookId,
      this.props.chapterId,
      argument
    );
  }

  render() {
    const chapter = this.chapter;
    return (
      <Container>
        <Row>
          <Col>
            <h1>{chapter.title}</h1>
            <ul>
              {chapter.arguments.map((argument, index) => {
                return (
                  <li key={index}>
                    {argument}
                  </li>
                );
              })}
              <li>
                <AddNew 
                  placeholder="Argument"
                  add={this.handleAdd}
                />
              </li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col><Back /></Col>
        </Row>
      </Container>
    );
  }
}
