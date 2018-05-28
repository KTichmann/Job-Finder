import React from "react";
import { Input, Button } from 'semantic-ui-react';

//Prop inputs are *label*, *id* for input, and *buttonText*
const AddItem = props => {
  return(
    <div style={{ margin: '0px 20px' }}>
      <div style={{fontSize: '1.5rem', display: 'inline-block', weight: '900'}}><strong>{props.label + ": "}</strong></div>
      <Input style={{margin: '20px 20px'}} name="input" id={props.id} type="text"/>
      <Button onClick={props.clickHandler}>{props.buttonText}</Button>
    </div>
  )
}

export default AddItem;
