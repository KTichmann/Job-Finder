import React from "react"
import store from "../../redux/store"
import AddItem from "./AddItem"
import TitleUI from "./TitleUI"
import { addLocationAction, addKeywordAction, removeKeywordAction } from "../../redux/action_creators"
import { Button, List, Icon } from 'semantic-ui-react'

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
      <div id="preferences">
        <div>
          <div className="addItemHolder">
           <AddItem label="Location" buttonText="Change Location" id="locationInput" clickHandler={this.locationClickHandler} />
           <AddItem label="Keyword" buttonText="Add Keyword" id="keywordInput" clickHandler={this.keywordClickHandler}/>
          </div>
          <TitleUI location={this.state.location} keywords={this.state.keywords.map(keyword => {
            return (
              <List.Item id={keyword} key={keyword} className="listItem">
                <List.Content floated='right'>
                  <Button negative id={keyword} onClick={e => {this.removeKeyword(e)}}>Remove</Button>
                </List.Content>
                <Icon className="listIcon" name='right triangle' />
                <List.Content className="listContent">
                  <div className="listKeyword">{keyword.toUpperCase()}</div>
                </List.Content>
              </List.Item>
            )
            })
          }
        />
        </div>
      </div>
    )
  }
}

export default Preferences;
