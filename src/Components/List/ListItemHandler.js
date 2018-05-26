import React from 'react';
import ListItem from './ListItem';

class ListItemHandler extends React.Component{
  constructor(props){
    super(props)
  }
  getListData(){
    const showList = [];
    this.props.list.forEach(value => {
        const obj = value.jobObject;
        console.log(obj.id)
        const listItem = <ListItem key={obj.id} jobObject={obj}/>
        showList.push(listItem)
    })
    console.log(showList)
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
