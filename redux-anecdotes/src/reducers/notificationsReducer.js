import { createSlice } from '@reduxjs/toolkit'
import getId from '../utils/getId'

const notificationsSlice = createSlice({
  name: 'notifications',
  initialState: [],
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
    setInitialAnecdotes (state, action) {
      return action.payload
    },
    appendNotification (state, action) {
      state.push(action.payload)
    },
    deleteNotification (state, action) {
      return state.filter(s => s.id !== action.payload)
    }
  }
})

export const { addNotificationInfo, addNotificationError, deleteNotification, appendNotification, setInitialAnecdotes } = notificationsSlice.actions

export const setNotification = (message, timeout=5, { type = 'INFO' } = {}) => {
  return async dispatch => {
    const id = getId()
    dispatch(appendNotification({ id, message: `${type}: ${message}`, type }))
    setTimeout(() => dispatch(deleteNotification(id)), timeout * 1000)
  }
}

export const initializeNotifications = (notifications) => {
  return async dispatch => {
    const finalMessages = []
    for (const {message, type, timeout} of notifications) {
      const id = getId()
      finalMessages.push({
        id,
        message: `${type || 'INFO'}: ${message}`,
        type: type || 'INFO',
        timeout: timeout || 5
      })
    }
    dispatch(setInitialAnecdotes(finalMessages))
    for (let {id, timeout} of finalMessages) {
      setTimeout(() => dispatch(deleteNotification(id)), timeout * 1000)
    }
  }
}

export default notificationsSlice.reducer