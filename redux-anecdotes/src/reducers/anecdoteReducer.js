import { createSlice } from '@reduxjs/toolkit'

const initialState = []

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState,
  reducers: {
    resetVotes (state) {
      return state.map(s => { return { ...s, votes: 0 } })
    },
    voteTo (state, action) {
      return state.map(s => s.id !== action.payload ? s : {...s, votes: s.votes + 1 })
    },
    addNewAnecdote (state, action) {
      return [...state, action.payload]
    },
    setAnecdotes (state, action) {
      return action.payload
    }
  }
})

export const { resetVotes, voteTo, addNewAnecdote, setAnecdotes } = anecdoteSlice.actions
export default anecdoteSlice.reducer