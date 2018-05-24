import React from 'react'
import JobCard from './JobCard'

const JobCardHandler = (props) => {

  const makeJobCards = (list) => {
    if(list.length === 0){
      return <JobCard jobObject={{description: "loading"}}/>
    }
    const jobCardList = list.map(obj => <JobCard jobObject={obj} key={obj.id} zIndex={list.indexOf(obj)}/>)
     return jobCardList;
  }
  const style = {
    position: "relative",
    width: "500px",
    height: "90vh",
    left: "50%",
    top: "20px",
    transform: "translateX(-50%)"
  }
  const buttonStyle = {
    position: "absolute",
    bottom: "30px",
    width: "180px",
    height: "30px",
    borderRadius: "10px",
    backgroundColor: "rgba(0, 0, 150, .5)",
    color: "white",
    padding: "5px",
    border: "none",
    outline: "none"
  }
  return(
    <div style={style}>
      {makeJobCards(props.jobList)}
      <button style={{...buttonStyle, left: '40px'}} onClick={() => {props.jobDecision(0)}}>No</button>
      <button style={{...buttonStyle, right: '40px'}} onClick={() => {props.jobDecision(1)}}>Yes</button>
    </div>
  )
}

export default JobCardHandler;
