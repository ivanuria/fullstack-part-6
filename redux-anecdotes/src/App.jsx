import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
// Components
import AnecdoteList from './components/AnecdoteList'
import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteFilter from './components/AnecdoteFilter'
import Notifications from './components/Notifications'
// Actions
import { initializeAnecdotes } from './reducers/anecdoteReducer'
import { initializeNotifications } from './reducers/notificationsReducer'

export const initialNotifications = [ // This kind of implementation is useful
  {
    message: 'Welcome to Anecdotes, you can click me if I am an issue',
    timeout: 10
  },
  {
    message: 'Now with multiple messages!!!'
  },
  {
    message: 'This is an example error with default Timeout of 5 secs',
    type: 'ERROR'
  }
]

const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(initializeAnecdotes())
    dispatch(initializeNotifications(initialNotifications))
  }, [])

  return (
    <div>
      <Notifications />
      <h1>Anecdotes</h1>
      <AnecdoteFilter />
      <AnecdoteList />
      <AnecdoteForm />
    </div>
  )
}

export default App