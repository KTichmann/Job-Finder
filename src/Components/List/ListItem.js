import React from 'react';
import { List, Image } from 'semantic-ui-react';

const ListItem = (props) => {
  const { company, title, location, company_logo, id } = props.jobObject

  return(
    <List.Item className="listItem">
      <Image style={{backgroundColor:"white"}} avatar src={company_logo} />
      <List.Content>
        <List.Header> {title} </List.Header>
        <List.Description>{`Company: ${company} | Location: ${location}`}</List.Description>
      </List.Content>
    </List.Item>
  )
}

export default ListItem;
