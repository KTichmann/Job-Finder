import React from "react"
import { List } from 'semantic-ui-react'
//Prop inputs are *location* and *keywords*
const TitleUI = props => {
  return(
    <div>
      <h2 className="titleUI">Searching for Jobs in {props.location.replace('+', ' ')}</h2>
      <List divided verticalAlign='middle'>{props.keywords}</List>
    </div>
  )
}

export default TitleUI;
