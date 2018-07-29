import React from 'react';
import ListItem from './ListItem';
import { List } from 'semantic-ui-react';
import { removePositionAction } from '../../redux/action_creators';
import store from "../../redux/store";

class ListItemHandler extends React.Component{
  constructor(props){
    super(props);
    this.removePosition = this.removePosition.bind(this);
  }
  //   // this.removeJob = this.removeJob.bind(this)
  // }
  // componentWillMount(){
  //   this.updateJobList();
  // }
  // componentWillReceiveProps(){
  //   this.updateJobList();
  // }
  // removeJob(id){
  //   this.setState(() => {
  //     return {
  //       jobList: this.state.jobList.filter(item => {
  //         if(item.props.jobObject.id === id){
  //           console.log("check")
  //           return false;
  //         } else{
  //           return true;
  //         }
  //       })
  //     }
  //   })
  // }
  componentWillReceiveProps(){
    this.updateJobList();
  }
  removePosition(id){
    store.dispatch(removePositionAction(id))
    this.props.updatePositions()
  }
  updateJobList(){
    const jobList = [];
    this.props.list.forEach(value => {
        const obj = value.jobObject;
        const listItem = <ListItem key={obj.id} jobObject={obj} removePosition={this.removePosition}/>
        jobList.push(listItem);
    })
    return jobList;
  }
  render(){
    return(
      <List size="big" className="list">
        {this.updateJobList()}
      </List>
    )
  }
}

export default ListItemHandler;
