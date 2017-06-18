import React, { Component } from 'react';
import Paris from './Paris';
import logo from './paris-logo.svg';

class Home extends Component {
  render() {
    return (
      <div className='App'>
        <div className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h1>P A R I S</h1>
        </div>
        <Paris />
      </div>
    );
  }
}

export default Home;
