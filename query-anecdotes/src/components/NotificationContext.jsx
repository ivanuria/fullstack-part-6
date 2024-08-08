import { createContext, useReducer, useContext } from 'react'
import getId from '../utils/getId'

const notificationsReducer = (state, action) => {
  switch (action.type) {
    case 'notifications/createNotification':
      return state.concat(action.payload)
    case 'notifications/deleteNotification':
      return state.filter(s => s.id !== action.payload)
    default:
      return state
  }
}

export const createNotificationAction = (message, type='INFO') => {
  return {
    type: 'notifications/createNotification',
    payload: { id: getId(), message, type }
  }
}

export const deleteNotificationAction = (id) => {
  return {
    type: 'notifications/deleteNotification',
    payload: id
  }
}

const NotificationsContext = createContext()

// Custom Hooks
export const useNotificationsValue = () => {
  const vAndD = useContext(NotificationsContext)
  return vAndD[0]
}

export const useNotificationsDispatch = () => {
  const vAndD = useContext(NotificationsContext)
  return vAndD[1]
}

export const NotificationsContextProvider = (props) => {
  const [notifications, notificationsDispatch] = useReducer(notificationsReducer, [])

  return (
    <NotificationsContext.Provider value={ [notifications, notificationsDispatch] }>
      { props.children }
    </NotificationsContext.Provider>
  )
}

export default NotificationsContext