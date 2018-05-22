import React from 'react';
import store from '../../redux/store';
import JobCard from './JobCard';
import { addPositionAction } from '../../redux/action_creators';

class Home extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      jobList: [{title: 'loading'}]
    }
  }
  getJobs(){
    //filters out the jobs that have already been seen
    const filterJobData = (jobArray) => {
      const seenJobsIdList = store.getState().positions.map(obj => obj.id);
      const filteredJobArray = jobArray.filter((job) => {
        return seenJobsIdList.indexOf(job.id) == -1
      });
      return filteredJobArray;
    }
    //Get location and keyword from state preferences in store
    const location = store.getState().preferences.location
    const keyword = store.getState().preferences.keywords[0]
    //Make the url to query
    const url = `https://jobs.github.com/positions.json?description=${keyword}&location=${location}`
    //Query the url
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        const filteredRes = filterJobData(res);
        console.log(filteredRes)
        this.setState(() => {
          return {
            jobList: filteredRes
          }
        })
      })
  }
  componentDidMount(){
    this.getJobs()
  }
  jobDecision(ans){
    console.log("clicked ", ans)
    const job = this.state.jobList[0]
    const dateCreated = new Date(Date.parse(job.created_at));
    store.dispatch(addPositionAction(job.id, ans === 1, dateCreated));
    const newJobList = [...this.state.jobList]
    newJobList.shift()
    this.setState(() => ({
      jobList: newJobList
      })
    )
  }
  render(){
    return(
      <div>
        <JobCard
          title={this.state.jobList[0].title}
          company={this.state.jobList[0].company}
          img={this.state.jobList[0].company_logo}
          description={this.state.jobList[0].description ? this.state.jobList[0].description.substring(0, 500).concat("...") : ""}
          location={this.state.jobList[0].location}
          type={this.state.jobList[0].type}
           />
         <button onClick={() => {this.jobDecision(0)}}>Left</button>
         <button onClick={() => {this.jobDecision(1)}}>Right</button>
      </div>
    )
  }
}

export default Home;
