import NotificationsContext, { deleteNotificationAction } from "./NotificationContext"
import { useContext, useEffect } from "react"

const Notification = ({ notification, deleteNotification }) => {
  const { id, type, message } = notification

  useEffect(() => {
    setTimeout(() => deleteNotification(id), 5000)
  }, [])

  const style = {
    border: '2px solid currentcolor',
    padding: '.5rem',
    backgroundColor: 'white',
    borderRadius: '.5rem',
    color: '#CCC',
    cursor: 'pointer'
  }

  switch (type) {
    case 'INFO':
      style.color = 'green'
      break
    case 'ERROR':
      style.color = 'red'
      break
  }

  return (
    <li style={style} onClick={ () => deleteNotification(id) }>
      { type }: { message }
    </li>
  )
}

const Notifications = () => {
  const [notifications, notificationsDispatch] = useContext(NotificationsContext)

  console.log("Notifications", notifications)

  const deleteNotification = (id) => {
    notificationsDispatch(deleteNotificationAction(id))
  }

  const style = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    paddingInlineStart: 0,
    display: 'flex',
    flexFlow: 'column',
    gap: '.5rem'
  }
  return (
    <ul style={style}>
      {
        notifications.map(notification =>
          <Notification key={notification.id} notification={ notification } deleteNotification={ deleteNotification }/>
        )
      }
    </ul>
  )
}

export default Notifications
