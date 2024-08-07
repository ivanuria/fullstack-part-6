const filterReducer = (state = '', action) => {
  switch (action.type) {
    case 'ANECDOTE:SET_FILTER':
      return action.payload
  }
  return state
}

export const setFilterTo = (filter) => {
  return {
    type: 'ANECDOTE:SET_FILTER',
    payload: filter
  }
}

export default filterReducer