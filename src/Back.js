import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import { withRouter } from 'react-router-dom';

class Back extends Component {
  constructor(props) {
    super(props);
    this.goBack = this.goBack.bind(this);
  }

  goBack() {
    this.props.history.goBack();
  }

  render() {
    return (
      <Button variant="success" size="sm" onClick={this.goBack}>
        Back
      </Button>
    );
  }
}

export default withRouter(Back);
