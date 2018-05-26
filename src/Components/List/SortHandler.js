import React from 'react';
import SortUI from './SortUI'

const SortHandler = (props) => {
    const handleSort = num => {
        //Sort the list from props depending on the number given
        //0 = a-z
        //1 = z-a
        console.log(props.input)
        const newView = props.input.sort((a,b) => {
            //if the title of a is lower alphabetically than that of b
            if (a.jobObject.title.toLowerCase().replace(/^\s+/g, "") < b.jobObject.title.toLowerCase().replace(/^\s+/g, "")){
                //if "a-z" sort a lower than b, else b lower than a
                return num === 0 ? -1 : 1
            } else{
                return num === 0 ? 1 : -1
            }
        })
        //Update the current view with the sorted view
        props.updateView(newView)
    }
    return(
        <SortUI handleSort={handleSort}/>
    )
}

export default SortHandler;