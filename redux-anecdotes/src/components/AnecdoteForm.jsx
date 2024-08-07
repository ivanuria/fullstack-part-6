
import { useDispatch } from 'react-redux'
// Components
import FormRow from './FormRow'
// Reducers
import { addNewAnecdote } from '../reducers/anecdoteReducer'
import { addNotificationInfo } from '../reducers/notificationsReducer'
// Services
import anecdotesService from '../services/anecdotes'

const AnecdoteForm = () => {
  const dispatch = useDispatch()

  const addAnecdote = async (event) => {
    event.preventDefault()
    const content = event.target.content.value
    if (content) {
      const newAnectode = await anecdotesService.createNew(content)
      if (newAnectode) {
        dispatch(addNewAnecdote(newAnectode))
        dispatch(addNotificationInfo(`New anecdote ADDED! '${content}'`))
      }
    }
    event.target.content.value = ''
  }

  return (
    <div>
      <h2>Create New</h2>
      <form onSubmit={ addAnecdote }>
        <FormRow>
          <label htmlFor='content'>Content:</label>
          <input id='content' name='content' />
        </FormRow>
        <input type='submit' value='Create anecdote' style={ { marginBlock: '1rem' } } />
      </form>
    </div>
  )
}

export default AnecdoteForm