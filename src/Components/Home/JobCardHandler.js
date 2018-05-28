import React from 'react'
import JobCard from './JobCard'
import { Button, Segment } from 'semantic-ui-react'

const JobCardHandler = (props) => {
  const makeJobCards = (list) => {
    if(list.length === 0){
      return <JobCard jobObject={{description: "loading", location: 'In your heart', type: 'Awesome', loading: true}}/>
    }
    const jobCardList = list.map(obj => <JobCard jobObject={obj} key={obj.id} zIndex={list.indexOf(obj)}/>)
     return jobCardList;
  }
  const style = {
    position: "relative",
    width: "400px",
    height: "90vh",
    top: "20px",
    display: 'inline-block',
    outline: "none"
  }
  const buttonStyle = {
    position: "absolute",
    bottom: "0px",
    width: "170px",
    height: "50px",
    paddingTop: "20px",
    paddingBottom: "20px"
  }
  const holderStyles = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around"
  }
  const dropBoxStyle = {
    width: "500px",
    height: "700px",
    display: "inline-block",
    outline: "none"
  }
  return(
    <div id="cardAndButtonHolder" style={holderStyles}>
      <div className="dropContainer dropContainer-no" style={dropBoxStyle}>
      </div>
      <div className="dropContainer dropContainer-center" style={style} id="draggableContainer">
        <div id="cardHolder">
          {makeJobCards(props.jobList)}
        </div>
        <Button negative style={{...buttonStyle, left: '20px'}} onClick={() => {props.jobDecision(0)}}>No</Button>
        <Button positive style={{...buttonStyle, right: '20px'}} onClick={() => {props.jobDecision(1)}}>Yes</Button>
      </div>
      <div className="dropContainer dropContainer-yes" style={dropBoxStyle}>
      </div>
    </div>
  )
}

export default JobCardHandler;
