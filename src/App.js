import React, { Component } from 'react';
import logo from './logo.svg';
import Preferences from './Components/Preferences/Preferences';
import Home from './Components/Home/Home';
import List from './Components/List/List';
import NavBar from './Components/NavBar/NavBar'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';

const App = () => (
  <Router>
    <div style={{display: 'flex'}}>
      <NavBar />
      <Route exact path='/' component={Home} />
      <Route path='/preferences' component={Preferences} />
      <Route path='/list' component={List} />
    </div>
  </Router>
)

export default App;
