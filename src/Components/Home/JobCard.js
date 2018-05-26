import React from 'react'
import { Card, Image } from 'semantic-ui-react'

const JobCard = props => {
  const {company_logo, company, title, description, location, type} = props.jobObject;
  const editedDescription = description.substring(0, 400).concat("...").replace(/<[^>]*>/g, " ");
  const style = {
    position: 'absolute',
  }

  return(
    <Card style={style} fluid >
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
  )
}

export default JobCard


// const style = {
//   width: '500px',
//   height: '550px',
//   marginBottom: '10px',
//   backgroundColor:'#dddddd',
//   position: 'absolute',
//   textAlign: 'center',
//   borderRadius: '5px',
//   boxShadow: '2px 2px 5px 1px rgba(100,100,100,0.1)'
// }
// const noMargin = {
//   margin: '0'
// }
// return(
//   <div style={style}>
//     <img
//       height="150px"
//       width="400px"
//       src={company_logo}
//     />
//     <h1
//       style={{
//         fontSize: '24px',
//         marginTop: '10px'
//       }}
//     > {title} </h1>
//   <h2
//     style={{
//       fontSize: '20px'
//     }}
//     >{company}</h2>
//   <p style={noMargin}>{description.substring(0, 500).concat("...").replace(/<[^>]*>/g, " ")}</p>
//     <br />
//   <p style={noMargin}>{location ? `Location: ${location}` : false}</p>
//     <br />
//   <p style={noMargin}> {type ? `Type: ${type}` : false}</p>
//   </div>
// )
// }

// export default JobCard;