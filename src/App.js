import React, { Component } from 'react';
import logo from './paris-logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>P A R I S</h1>
        </div>
      </div>
    );
  }
}

export default App;
