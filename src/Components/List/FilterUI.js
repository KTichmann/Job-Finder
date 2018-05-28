import React from 'react';
import {Button, Input} from 'semantic-ui-react';

const FilterUI = (props) => {
  return(
    <div style={{marginTop:'20px'}}>
      <Input style={{width:'300px'}} className="filterUISearchInput" type="text" />
      <Button style={{marginLeft:'20px'}} onClick={(e) => props.handleSearch(e)}>Search</Button>
      <Button style={{marginLeft:'20px'}} onClick={props.handleShowAll}>Show All</Button>
    </div>
  )
}
export default FilterUI;
