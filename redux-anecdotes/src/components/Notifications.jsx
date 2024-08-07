import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { deleteNotification } from "../reducers/notificationsReducer"

const Notification = ({ type, message, id }) => {
  const dispatch = useDispatch()

  useEffect(() => {
    setTimeout(() => dispatch(deleteNotification(id)), 5000)
  }, [id])

  const style = {
    border: '2px solid currentcolor',
    borderRadius: 8,
    padding: '1rem',
    cursor: 'pointer'
  }
  switch(type) {
    case 'INFO':
      style.color = 'green'
      break
    case 'ERROR':
      style.color = 'red'
  }
  return (
    <li style={style} onClick={ () => dispatch(deleteNotification(id)) }>
      { message }
    </li>
  )
}

const Notifications = ({ children, ...props }) => {
  const notifications = useSelector(state => state.notifications)
  const style = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    display: 'flex',
    flexFlow: 'column',
    gap: 2,
    paddingInlineStart: 0,
    backgroundColor: 'white'
  }

  return (
    <ul className='notifications' style={ style } { ...props }>
      {notifications.map(notification =>
        <Notification key={ notification.id } { ...notification } />
      )}
    </ul>
  )
}

export default Notifications