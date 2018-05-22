import React, { Component } from 'react';
import logo from './logo.svg';
import Preferences from './Components/Preferences/Preferences';
import Home from './Components/Home/Home'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Home />
      </div>
    );
  }
}

export default App;
