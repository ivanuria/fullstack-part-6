import { createSlice } from '@reduxjs/toolkit'
import getId from '../utils/getId'

export const initialState = [
  {
    id: 'welcome',
    type: 'INFO',
    message: 'Welcome to Anecdotes'
  }
]

const notificationsSlice = createSlice({
  name: 'notifications',
  initialState,
  reducers: {
    addNotificationInfo (state, action) {
      state.push({
        id: getId(),
        message: action.payload,
        type: 'INFO'
      })
    },
    addNotificationError (state, action) {
      state.push({
        id: getId(),
        message: action.payload,
        type: 'ERROR'
      })
    },
    deleteNotification (state, action) {
      return state.filter(s => s.id !== action.payload)
    }
  }
})

export const { addNotificationInfo, addNotificationError, deleteNotification } = notificationsSlice.actions
export default notificationsSlice.reducer