import React from 'react';

const ListItem = (props) => {
  const { company, title, location } = props.jobObject
  const style = {
    display: 'flex',
    justifyContent: 'space-between'
  }
  return(
    <div style={style}>
      <p>{title}</p>
      <p>{company}</p>
      <p>{location}</p>
    </div>
  )
}

export default ListItem;
