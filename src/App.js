import React, { Component } from 'react';
import logo from './logo.svg';
import Preferences from './Components/Preferences/Preferences';
import Home from './Components/Home/Home';
import List from './Components/List/List';
import NavBar from './Components/NavBar/NavBar';
import UserAuth from './Components/UserAuth/UserAuth';
import SignUp from './Components/UserAuth/SignUp'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import firebase from './Components/firebase'
import './App.css';

//Add a realtime authentication listener firebase.auth().onAuthStateChanged(firebaseUser => { if(firebaseUser) {} }
class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      user: false
    }
    this.logout = this.logout.bind(this)
  }
  componentDidMount(){
    firebase.auth().onAuthStateChanged(firebaseUser => {
      if(firebaseUser){
        this.setState(() => ({user: true}))
      }
    })
  }
  logout(){
    this.setState(() => ({
      user: false
    }))
  }
  render(){
    return(
        <Router>
          <div style={{display: 'flex'}}>
            <div className="navBarWrapper"></div>
            <NavBar />
            <UserAuth logout={this.logout} loggedIn={this.state.user}/>
            <Route exact path='/sign-up' component={SignUp} />
            <Route exact path='/' component={Home} />
            <Route path='/preferences' component={Preferences} />
            <Route path='/list' component={List} />
          </div>
      </Router>
    )
  }
}

export default App;
