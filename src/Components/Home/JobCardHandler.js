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

  return(
    <div id="cardAndButtonHolder">
      <div className="dropContainer dropContainer-no">
      </div>
      <div className="dropContainer dropContainer-center" id="draggableContainer">
        <div id="cardHolder">
          {makeJobCards(props.jobList)}
        </div>
        <Button className="decisionButton decisionButton-no" negative onClick={() => {props.jobDecision(0)}}>No</Button>
        <Button className="decisionButton decisionButton-yes" positive onClick={() => {props.jobDecision(1)}}>Yes</Button>
      </div>
      <div className="dropContainer dropContainer-yes">
      </div>
    </div>
  )
}

export default JobCardHandler;
