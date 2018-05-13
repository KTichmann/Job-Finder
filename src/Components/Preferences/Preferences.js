import React from "react"
import ReactDOM from "react-dom"
import store from "../../redux/store"
import AddItem from "./AddItem"
import TitleUI from "./TitleUI"
import { addLocationAction, addKeywordAction, removeKeywordAction } from "../../redux/action_creators"
//Prop inputs are ___TODO___
class Preferences extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      location: store.getState().preferences.location,
      keywords: store.getState().preferences.keywords
    }
    this.locationClickHandler = this.locationClickHandler.bind(this);
    this.keywordClickHandler = this.keywordClickHandler.bind(this);
  }
  locationClickHandler(){
    let userInput = document.getElementById("locationInput").value
    if(userInput !== "" && userInput){
      //Dispatch the user's inputted location to the store
      store.dispatch(addLocationAction(userInput))
      this.setState(() => ({
        location: userInput
      }))
      //clear input field
      document.getElementById("locationInput").value = ""
    }
  }
  keywordClickHandler(){
    let userInput = document.getElementById("keywordInput").value
    if(userInput !== "" && userInput){
      //Dispatch the user's inputted location to the store
      store.dispatch(addKeywordAction(userInput))
      this.setState(prevState => ({
        keywords: prevState.keywords.concat(userInput)
      }))
      //clear input field
      document.getElementById("keywordInput").value = ""
    }
  }
  removeKeyword(e){
    let removedKeyword = e.target.id;
    store.dispatch(removeKeywordAction(removedKeyword));
    this.setState((prevState) => ({
      keywords: prevState.keywords.filter(word => word !== removedKeyword)
    }))
    console.log(store.getState())
  }
  render(){
    return(
      <div>
        <TitleUI location={this.state.location} keywords={this.state.keywords.map(keyword => {
          return (<div key={keyword} id={keyword}>
            <p>{keyword}</p>
          <p
            id={keyword}
            onClick= { (e) => {this.removeKeyword(e)}
          }
          >-</p>
          </div>)
          })
        }
      />
        <AddItem label="Location" buttonText="Change Location" id="locationInput" clickHandler={this.locationClickHandler} />
      <AddItem label="Keyword" buttonText="Add Keyword" id="keywordInput" clickHandler={this.keywordClickHandler}/>
      </div>
    )
  }
}

export default Preferences;
