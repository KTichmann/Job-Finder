export const addLocationAction = location => {
  return {
    type: 'ADD-LOCATION',
    payload: {
      location
    }
  }
};

export const addKeywordAction = keyword => {
  return {
    type: 'ADD-KEYWORD',
    payload: {
      keyword
    }
  }
}

export const removeKeywordAction = keyword => {
  return{
    type: 'REMOVE-KEYWORD',
    payload: {
      keyword
    }
  }
}

export const addPositionAction = (id, inList, dateCreated, jobObject) => {
  return {
    type: 'ADD-POSITION',
    payload: {
      id,
      inList,
      dateCreated,
      jobObject
    }
  }
}

export const removePositionAction = id => {
  return{
    type: 'REMOVE-POSITION',
    payload: {
      id
    }
  }
}
