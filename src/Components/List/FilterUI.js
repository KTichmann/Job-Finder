import React from 'react';

const FilterUI = (props) => {
  return(
    <div>
      <input className="filterUISearchInput" type="text" />
      <button onClick={(e) => props.handleSearch(e)}>Search</button>
      <button onClick={props.handleShowAll}>Show All</button>
    </div>
  )
}
export default FilterUI;
