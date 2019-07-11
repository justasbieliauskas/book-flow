import { Link } from 'react-router-dom';
import React, { Component } from 'react';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

import Back from './Back';
import AddNew from './AddNew';

export default class Chapters extends Component {
  constructor(props) {
    super(props);
    this.handleAdd = this.handleAdd.bind(this);
  }

  handleAdd(title) {
    this.props.add(this.props.id, title);
  }

  render() {
    const withId = book => book.id === this.props.id;
    const book = this.props.books.find(withId);
    return (
      <Container>
        <Row>
          <Col>
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
              <li>
                <AddNew 
                  placeholder="Chapter title"
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
