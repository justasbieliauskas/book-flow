import React, { Component } from 'react';

import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default class AddNew extends Component {
  constructor(props) {
    super(props);
    this.state = {showInput: false, value: ''};
    this.handleInput = this.handleInput.bind(this);
    this.handleAddClick = this.handleAddClick.bind(this);
  }

  handleInput(event) {
    this.setState({value: event.target.value});
  }

  handleAddClick() {
    if(!this.state.showInput) {
      this.setState({showInput: true});
    } else {
      this.props.add(this.state.value);
      this.setState({showInput: false, value: ''});
    }
  }

  render() {
    return (
      <Form.Row>
        {this.state.showInput &&
          <Col xs={9}>
            <Form.Control 
              size="sm"
              placeholder={this.props.placeholder}
              onChange={this.handleInput}
            />
          </Col>
        }
        <Col xs={3}>
          <Button
            size="sm"
            onClick={this.handleAddClick}
          >
            Add
          </Button>
        </Col>
      </Form.Row>
    );
  }
}
