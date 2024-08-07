import { createSlice } from '@reduxjs/toolkit'

const filterSlice = createSlice({
  name: 'anecdoteFilter',
  initialState: '',
  reducers: {
    setFilterTo (state, action) {
      return action.payload
    }
  }
})

export const { setFilterTo } = filterSlice.actions
export default filterSlice.reducer