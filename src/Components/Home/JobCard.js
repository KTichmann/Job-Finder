import React from 'react';
import { Card, Image } from 'semantic-ui-react';

const JobCard = props => {
  const {company_logo, company, title, description, location, type, loading} = props.jobObject;
  const editedDescription = description.substring(0, 400).concat("...").replace(/<[^>]*>/g, " ");
  let className;
  if(loading){
    className = 'loadingCard'
  } else{
    className = 'jobCard'
  }
  
  return(
    <div id="jobCardMain">
      <Card className={className} fluid>
        <Image height="280px" src={company_logo} />
        <Card.Content>
          <Card.Header className="cardContent">{title}</Card.Header>
          <Card.Meta className="cardContent">{company}</Card.Meta>
          <Card.Description className="cardContent">{editedDescription}</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <p className="cardContent cardContent-black">{`Location: ${location} | Type: ${type}`}</p>
        </Card.Content>
      </Card>
    </div>
  )
}

export default JobCard;