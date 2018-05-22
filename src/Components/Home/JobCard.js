import React from 'react';

const JobCard = props => {
  return(
    <div>
      <img src={props.img} />
      <h1>{props.title}</h1>
      <h2>{props.company}</h2>
    <p>{props.description.replace(/<\/?p>/g, " ")}</p>
      <br />
      <p>Location: {props.location}</p>
      <br />
      <p>Type: {props.type}</p>
    </div>
  )
}

export default JobCard;
