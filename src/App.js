import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

import FirstPage from './FirstPage';
import SecondPage from './SecondPage';

export default class App extends Component {
    render() {
        return (
            <Router>
                <Route path="/" exact component={FirstPage} />
                <Route path="/second" exact component={SecondPage} />
            </Router>
        );
    }
}
