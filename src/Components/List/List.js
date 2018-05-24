import React from 'react';
import store from '../../redux/store';
import ListItemHandler from './ListItemHandler';
import FilterHandler from './FilterHandler'

class List extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      positions: [],
      view: []
    }
    this.updateView = this.updateView.bind(this);
  }
  //Fetch list Items
  componentDidMount(){
    const positions = store.getState().positions;
    this.setState(() => ({ positions, view: positions }))
    console.log(positions)
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
      <div>
        <ListItemHandler list={this.state.positions.length === 0 ? [{title: 'loading'}] : this.state.view}/>
        <FilterHandler input={this.state.positions.filter(obj => obj.inList)} updateView={this.updateView}/>
      </div>
    )
  }
}

export default List;
