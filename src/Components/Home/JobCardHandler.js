import React from 'react'
import JobCard from './JobCard'
import { Button, Segment } from 'semantic-ui-react'

const JobCardHandler = (props) => {

  const makeJobCards = (list) => {
    if(list.length === 0){
      return <JobCard jobObject={{description: "loading", location: 'In your heart', type: 'Awesome'}}/>
    }
    const jobCardList = list.map(obj => <JobCard jobObject={obj} key={obj.id} zIndex={list.indexOf(obj)}/>)
     return jobCardList;
  }
  const style = {
    position: "relative",
    width: "400px",
    height: "90vh",
    left: "50%",
    top: "20px",
    transform: "translateX(-50%)"
  }
  const buttonStyle = {
    position: "absolute",
    bottom: "0px",
    width: "170px",
    height: "50px",
    paddingTop: "20px",
    paddingBottom: "20px"
  }
  return(
    <div style={style}>
      <Segment piled style={{padding: '0'}}>
       {makeJobCards(props.jobList)}
      </Segment>
      <Button negative style={{...buttonStyle, left: '20px'}} onClick={() => {props.jobDecision(0)}}>No</Button>
      <Button positive style={{...buttonStyle, right: '20px'}} onClick={() => {props.jobDecision(1)}}>Yes</Button>
    </div>
  )
}

export default JobCardHandler;
