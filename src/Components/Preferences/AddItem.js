import React from "react";
import { Input, Button } from 'semantic-ui-react';

//Prop inputs are *label*, *id* for input, and *buttonText*
const AddItem = props => {
  return(
    <div className="addItem">
      <div className="label"><strong>{props.label + ": "}</strong></div>
      <Input name="input" id={props.id} type="text"/>
      <Button onClick={props.clickHandler}>{props.buttonText}</Button>
    </div>
  )
}

export default AddItem;
