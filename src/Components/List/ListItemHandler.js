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
        const listItem = <ListItem key={obj.id} jobObject={obj}/>
        showList.push(listItem)
    })
    return showList;
  }

  render(){
    return(
      <List size="big" className="list">
        {this.getListData()}
      </List>
    )
  }
}

export default ListItemHandler;
