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
  }
  //Fetch list Items
  componentDidMount(){
    const positions = store.getState().positions.filter(obj => obj.inList);
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
      <div style={{display:'flex', flexDirection: 'row', justifyContent:'center', width: '70%', paddingTop:'50px'}}>
        <div style={{ padding:'15px', width:'45vw', backgroundColor:'#eee', borderRadius:'2%' }}>
          <FilterHandler input={this.state.positions} updateView={this.updateView}/>
          <SortHandler input={this.state.view} updateView={this.updateView}/>
          <ListItemHandler list={this.state.positions.length === 0 ? [{jobObject: {title: 'Your List is Empty! Get to Swipin!'}}] : this.state.view}/>
        </div>
      </div>
    )
  }
}

export default List;
