import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
// Components
import AnecdoteList from './components/AnecdoteList'
import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteFilter from './components/AnecdoteFilter'
import Notifications from './components/Notifications'
// Actions
import { initializeAnecdotes } from './reducers/anecdoteReducer'

const App = () => {
  const dispatch = useDispatch()
  useEffect(() => { dispatch(initializeAnecdotes()) }, [])

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