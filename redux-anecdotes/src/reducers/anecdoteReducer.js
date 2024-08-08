import { createSlice } from '@reduxjs/toolkit'
import anecdotesService from '../services/anecdotes'

const initialState = []

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState,
  reducers: {
    resetVotes (state) {
      return state.map(s => { return { ...s, votes: 0 } })
    },
    addNewAnecdote (state, action) {
      return [...state, action.payload]
    },
    setAnecdotes (state, action) {
      return action.payload
    },
    changeAnecdote (state, action) {
      return state.map(s => s.id !== action.payload.id ? s : action.payload)
    }
  }
})

export const { resetVotes, addNewAnecdote, setAnecdotes, changeAnecdote } = anecdoteSlice.actions

export const initializeAnecdotes = () => {
  return async dispatch => {
    const data = await anecdotesService.getAll()
    dispatch(setAnecdotes(data))
  }
}

export const createAnecdote = (content) => {
  return async dispatch => {
    if (content) {
      const response = await anecdotesService.createNew(content)
      dispatch(addNewAnecdote(response))
    }
  }
}

export const updateAnecdote = (content) => {
  return async dispatch => {
    if (content) {
      await anecdotesService.updateItem(content.id, content)
      dispatch(changeAnecdote(content))
    }
  }
}

export default anecdoteSlice.reducer