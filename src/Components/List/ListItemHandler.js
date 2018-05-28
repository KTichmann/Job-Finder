import React from 'react';
import ListItem from './ListItem';
import { List } from 'semantic-ui-react';

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
    width: 'auto'
  }
  render(){
    return(
      <List size="big" style={this.style}>
        {this.getListData()}
      </List>
    )
  }
}

export default ListItemHandler;
