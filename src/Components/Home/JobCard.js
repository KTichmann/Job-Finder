import React from 'react';
import { Card, Image } from 'semantic-ui-react';

const JobCard = props => {
  const {company_logo, company, title, description, location, type, loading} = props.jobObject;
  const editedDescription = description.substring(0, 400).concat("...").replace(/<[^>]*>/g, " ");
  const style = {
    position: 'absolute',
    width: '400px',
    height: '500px'
  }
  let className;
  if(loading){
    className = 'loadingCard'
  } else{
    className = 'jobCard'
  }
  console.log(className)
  return(
    <div style={style}>
      <Card className={className} fluid>
        <Image height="250px" src={company_logo} />
        <Card.Content>
          <Card.Header>{title}</Card.Header>
          <Card.Meta>{company}</Card.Meta>
          <Card.Description>{editedDescription}</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <p style={{color: 'black'}}>{`Location: ${location} | Type: ${type}`}</p>
        </Card.Content>
      </Card>
    </div>
  )
}

export default JobCard;