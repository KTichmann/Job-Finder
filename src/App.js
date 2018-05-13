import React, { Component } from 'react';
import logo from './logo.svg';
import Preferences from './Components/Preferences/Preferences';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Preferences />
      </div>
    );
  }
}

export default App;
