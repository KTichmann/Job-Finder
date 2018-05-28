import React from 'react';
import FilterUI from './FilterUI'

const FilterHandler = (props) => {
  const handleSearch = (e) => {
    e.preventDefault();
    const searchTerm = document.querySelector('.filterUISearchInput input').value.toLowerCase()
    if(searchTerm){
      const newView = props.input.filter((obj) => (obj.jobObject.company.toLowerCase().includes(searchTerm) || obj.jobObject.title.toLowerCase().includes(searchTerm) || obj.jobObject.location.toLowerCase().includes(searchTerm)))
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
