import { addLocation, addKeyword, removeKeyword, addPosition, removePosition } from './reducer_functions'
import { combineReducers } from 'redux'

let defaultState = {
  preferences: {
    location: '',
    keywords: []
  },
  positions: []
}

const reducer = (state = defaultState, action) => {
  switch(action.type){
    case 'ADD-LOCATION':
      return addLocation(state, action.payload.location)
    case 'ADD-KEYWORD':
      return addKeyword(state, action.payload.keyword)
    case 'REMOVE-KEYWORD':
      return removeKeyword(state, action.payload.keyword)
    case 'ADD-POSITION':
      return addPosition(state, {id: action.payload.id, inList: action.payload.inList})
    case 'REMOVE-POSITION':
      return removePosition(state, action.payload.id)
    default:
      return state;
  }
}

export default reducer;
