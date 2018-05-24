import React from 'react';
import ListItem from './ListItem';

class ListItemHandler extends React.Component{
  constructor(props){
    super(props)
  }
  getListData(){
    const showList = [];
    this.props.list.forEach(value => {
      if(value.inList){
        const obj = value.jobObject;
        const listItem = <ListItem key={obj.id} jobObject={obj}/>
        showList.push(listItem)
      }
    })
    return showList;
  }
  style = {
    width: '40vw'
  }
  render(){
    return(
      <div style={this.style}>
        {this.getListData()}
      </div>
    )
  }
}

export default ListItemHandler;
