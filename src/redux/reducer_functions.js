export const addLocation = (state, location) => {
  let formattedLocation = location.trim().replace(" ", "&");
  return{ ...state, preferences: {...state.preferences, location: formattedLocation} }
};

export const addKeyword = (state, keyword) => {
  let keywordList = state.preferences.keywords.concat(keyword);
  return({...state, preferences: {...state.preferences, keywords: keywordList}})
}

export const removeKeyword = (state, keyword) => {
  let keywordList = state.preferences.keywords.filter(word => word !== keyword);
  return { ...state, preferences: {...state.preferences, keywords: keywordList} }
}

export const addPosition = (state, position) => {
  let newPositionList = state.positions.concat(position);
  return {...state, positions: newPositionList}
}

export const removePosition = (state, id) => {
  let newPositionList = state.positions.filter(positionObj => positionObj.id !== id);
  return { ...state, positions: newPositionList }
}
