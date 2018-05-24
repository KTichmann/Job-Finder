import React from 'react';
import FilterUI from './FilterUI'

const FilterHandler = (props) => {
  const handleSearch = (e) => {
    e.preventDefault();
    const searchTerm = document.querySelector('.filterUISearchInput').value
    if(searchTerm){
      const newView = props.input.filter((obj) => obj.jobObject.description.includes(searchTerm))
      props.updateView(newView)
    }
  }
  const handleShowAll = () => {
    props.updateView(props.input)
  }
  return(
    <FilterUI handleSearch={handleSearch} handleShowAll={handleShowAll}/>
  )
}

export default FilterHandler;
