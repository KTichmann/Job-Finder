import React from 'react';
import { Link } from 'react-router-dom';
import firebase from '../firebase'

class UserAuth extends React.Component{
    constructor(props){
        super(props)
        this.logOut = this.logOut.bind(this)
    }
    logOut(){
        console.log("log")
        firebase.auth().signOut().then(() => {
                this.props.logout()
                console.log("ged out")
            })
            .catch((e) => console.log(e))
    }
    render(){
        return(
            <div className="userAuth">
                {
                    this.props.loggedIn ? 
                    <button onClick={this.logOut}>Log Out</button> : 
                    <div><button>Log In</button>
                    <Link to="/sign-up">Register</Link></div>
                }
            </div>)
    }
}

export default UserAuth;