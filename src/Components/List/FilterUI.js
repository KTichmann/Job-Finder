import React from 'react';
import {Button, Input} from 'semantic-ui-react';

const FilterUI = (props) => {
  return(
    <div className="filterUI">
      <Input className="filterInput" className="filterUISearchInput" type="text" />
      <Button className="filterButton" onClick={(e) => props.handleSearch(e)}>Search</Button>
      <Button className="filterButton" onClick={props.handleShowAll}>Show All</Button>
    </div>
  )
}
export default FilterUI;
