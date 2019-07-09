import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

import Books from './Books';

export default class App extends Component {
    render() {
        return (
            <Router>
                <Route path="/" exact component={Books} />
            </Router>
        );
    }
}
