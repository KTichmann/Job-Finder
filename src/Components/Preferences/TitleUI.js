import React from "react"
//Prop inputs are *location* and *keywords*
const TitleUI = props => {
  return(
    <div>
      <h2>Searching for jobs in {props.location},</h2>
      <h2>With {props.keywords} keywords</h2>
    </div>
  )
}

export default TitleUI;
