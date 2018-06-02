import React from 'react';
import { Card, Image } from 'semantic-ui-react';

const JobCard = props => {
  const {company_logo, company, title, description, location, type, loading} = props.jobObject;
  const editedDescription = description.substring(0, 400).concat("...").replace(/<[^>]*>/g, " ");
  const style = {
    position: 'absolute',
    width: '100%',
    height: '100%'
  }
  let className;
  if(loading){
    className = 'loadingCard'
  } else{
    className = 'jobCard'
  }
  const cardContentStyle = {
    margin: '8px 0'
  }
  console.log(className)
  return(
    <div style={style}>
      <Card className={className} fluid>
        <Image height="280px" src={company_logo} />
        <Card.Content>
          <Card.Header style={cardContentStyle}>{title}</Card.Header>
          <Card.Meta style={cardContentStyle}>{company}</Card.Meta>
          <Card.Description style={cardContentStyle}>{editedDescription}</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <p style={{...cardContentStyle, color: 'black'}}>{`Location: ${location} | Type: ${type}`}</p>
        </Card.Content>
      </Card>
    </div>
  )
}

export default JobCard;