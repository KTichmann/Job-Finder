import React from 'react';
import store from '../../redux/store';
import ListItemHandler from './ListItemHandler';
import FilterHandler from './FilterHandler';
import SortHandler from './SortHandler';

class List extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      positions: [],
      view: []
    }
    this.updateView = this.updateView.bind(this);
    this.updatePositions = this.updatePositions.bind(this);
  }
  //Fetch list Items
  componentDidMount(){
    this.updatePositions();
  }
  updatePositions(){
    const positions = store.getState().positions.filter(obj => obj.inList);
    this.setState(() => ({positions, view: positions}))
  }
  //Update the view when searching / sorting
  updateView(newView){
    this.setState(() => ({
      view: newView
    }))
  }
  //Display List Items
  render(){
    return(
      <div id="jobList">
        <div className="jobListHolder">
          <FilterHandler input={this.state.positions} updateView={this.updateView}/>
          <SortHandler input={this.state.view} updateView={this.updateView}/>
          <ListItemHandler removeModal={true} list={this.state.positions.length === 0 ? [{jobObject: {title: 'Your List is Empty! Get to Swipin!'}}] : this.state.view} updatePositions={this.updatePositions}/>
        </div>
      </div>
    )
  }
}

export default List;
