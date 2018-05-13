import React from "react"
//Prop inputs are *label*, *id* for input, and *buttonText*
const AddItem = props => {
  return(
    <div>
      {props.label + ": "}
      <input name="input" id={props.id} type="text"/>
      <button onClick={props.clickHandler}>{props.buttonText}</button>
    </div>
  )
}

export default AddItem;
