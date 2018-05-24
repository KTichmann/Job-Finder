import React from 'react';

const JobCard = props => {
  const {company_logo, company, title, description, location, type} = props.jobObject
  const style = {
    width: '500px',
    height: '550px',
    marginBottom: '10px',
    backgroundColor:'#dddddd',
    position: 'absolute',
    textAlign: 'center',
    borderRadius: '5px',
    boxShadow: '2px 2px 5px 1px rgba(100,100,100,0.1)'
  }
  const noMargin = {
    margin: '0'
  }
  return(
    <div style={style}>
      <img
        height="150px"
        width="400px"
        src={company_logo}
      />
      <h1
        style={{
          fontSize: '24px',
          marginTop: '10px'
        }}
      > {title} </h1>
    <h2
      style={{
        fontSize: '20px'
      }}
      >{company}</h2>
    <p style={noMargin}>{description.substring(0, 500).concat("...").replace(/<[^>]*>/g, " ")}</p>
      <br />
    <p style={noMargin}>{location ? `Location: ${location}` : false}</p>
      <br />
    <p style={noMargin}> {type ? `Type: ${type}` : false}</p>
    </div>
  )
}

export default JobCard;
