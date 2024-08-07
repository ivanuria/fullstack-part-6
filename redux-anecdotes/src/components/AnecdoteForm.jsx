
import { useDispatch } from 'react-redux'
import { addNewAnecdote } from '../reducers/anecdoteReducer'
import { addNotificationInfo } from '../reducers/notificationsReducer'
import FormRow from './FormRow'

const AnecdoteForm = () => {
  const dispatch = useDispatch()

  const addAnecdote = (event) => {
    event.preventDefault()
    const content = event.target.content.value
    if (content) {
      dispatch(addNewAnecdote(content))
      dispatch(addNotificationInfo(`New anecdote ADDED! '${content}'`))
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