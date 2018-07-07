import React from 'react';
import firebase from '../firebase';
import { Redirect } from 'react-router-dom';

class SignUp extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            loggedIn: false
        }
        this.addUser = this.addUser.bind(this)
    }
    componentDidMount(){
        document.getElementById("navBar").classList.add("hidden")
        document.querySelector(".userAuth").classList.add("hidden")
    }
    addUser() {
        let un = document.getElementById("userName").value;
        let pw = document.getElementById("password").value;
        firebase.auth().createUserWithEmailAndPassword(un, pw).then(() => {
            this.setState(() => ({
                loggedIn: true
            })) 
            console.log("registered!!")
        }).catch(function(error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorCode, errorMessage)
            });
    }
    render(){
        if(this.state.loggedIn){
            document.getElementById("navBar").classList.remove("hidden")
            document.querySelector(".userAuth").classList.remove("hidden")
            return <Redirect to="/" />
        } else {
            return(
                <div id="signUpPage">
                    <div className="input">User Name: <input id="userName" type="text" /></div>
                    <div className="input">Password: <input id="password" type="password" /></div>
                    <button onClick={this.addUser}>Log In</button>
                </div>
            )
        }
    }
}

export default SignUp;