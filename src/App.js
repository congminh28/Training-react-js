<<<<<<< HEAD
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
=======
import React from 'react';
import Form from './components/Form';
import Result from './components/Result';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact>
            <Form />
          </Route>
          <Route path="/result">
            <Result />
          </Route>
        </Switch>
      </Router>
    </div>
  );
>>>>>>> da8a7d8... Demo week 2
}

export default App;
