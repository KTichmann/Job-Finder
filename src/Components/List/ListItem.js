import React from 'react';
import { List, Image } from 'semantic-ui-react';

const ListItem = (props) => {
  const { company, title, location, company_logo } = props.jobObject
  const style = {
    padding: '15px 0'
  }
  return(
    <List.Item style={style} relaxed>
      <Image avatar src={company_logo} />
      <List.Content>
        <List.Header> {title} </List.Header>
        <List.Description>{`Company: ${company} | Location: ${location}`}</List.Description>
      </List.Content>
    </List.Item>
  )
}

export default ListItem;
