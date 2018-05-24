import React from 'react';
import store from '../../redux/store';
import JobCardHandler from './JobCardHandler'
import { addPositionAction } from '../../redux/action_creators';

class Home extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      jobList: [],
      number: 0,
      fetching: false
    }

    this.jobDecision = this.jobDecision.bind(this)
  }
  componentDidMount(){
    this.getJobs(this.state.number)
  }
  componentDidUpdate(){
    console.log(this.state.number, this.state.fetching)
    if(this.state.jobList.length === 0 && !this.state.fetching){
      const keywordList = store.getState().preferences.keywords
      if(keywordList.length > this.state.number + 1){
        this.getJobs(this.state.number + 1)
        this.setState((prevState) => ({
          number: prevState.number + 1
        }))
      } else{
        this.setState(() => ({
          jobList: [{description: "no more jobs left! Add more keywords, or try again later", id:0}]
        }))
      }
    }
  }
  getJobs(num){
    this.setState(() => ({
      fetching: true
    }))
    //filters out the jobs that have already been seen
    const filterJobData = (jobArray) => {
      const seenJobsIdList = store.getState().positions.map(obj => obj.id);
      const filteredJobArray = jobArray.filter((job) => {
        return seenJobsIdList.indexOf(job.id) === -1
      });
      return filteredJobArray;
    }
    //Get location and keyword from state preferences in store
    const location = store.getState().preferences.location
    const keyword = store.getState().preferences.keywords[num]
    //Make the url to query
    const url = `https://jobs.github.com/positions.json?description=${keyword}&location=${location}`
    //Query the url
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        const filteredRes = filterJobData(res);
        this.setState(() => {
          return {
            jobList: filteredRes,
            fetching: false
          }
        })
      })
  }
  jobDecision(ans){
    const job = this.state.jobList[this.state.jobList.length - 1]
    if(job && this.state.jobList[0].id !== 0){
      const dateCreated = new Date(Date.parse(job.created_at));
      store.dispatch(addPositionAction(job.id, ans === 1, dateCreated, ans === 1 ? job : {}));
      const newJobList = [...this.state.jobList]
      newJobList.pop()
      this.setState(() => ({
        jobList: newJobList
        })
      )
    }
  }

  render(){
    return(
      <div>
        <JobCardHandler position="relative" jobList={this.state.jobList} jobDecision={this.jobDecision}/>
      </div>
    )
  }
}

export default Home;
