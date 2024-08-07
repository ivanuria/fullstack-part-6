import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
// Components
import AnecdoteList from './components/AnecdoteList'
import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteFilter from './components/AnecdoteFilter'
import Notifications from './components/Notifications'
// Services
import anecdotesService from './services/anecdotes'
// Actions
import { setAnecdotes } from './reducers/anecdoteReducer'

const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    anecdotesService
      .getAll()
      .then(anecdotes => dispatch(setAnecdotes(anecdotes)))
  })

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