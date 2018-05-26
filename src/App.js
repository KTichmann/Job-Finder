import React, { Component } from 'react';
import logo from './logo.svg';
import Preferences from './Components/Preferences/Preferences';
import Home from './Components/Home/Home';
import List from './Components/List/List';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';

const App = () => (
  <Router>
    <div>
      <Link to='/'>Home</Link>
      <Link to='/preferences'>Preferences</Link>
      <Link to='/list'>Job List</Link>

      <Route exact path='/' component={Home} />
      <Route path='/preferences' component={Preferences} />
      <Route path='/list' component={List} />
    </div>
  </Router>
)

export default App;
