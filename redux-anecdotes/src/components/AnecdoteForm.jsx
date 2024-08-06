
import { useDispatch } from 'react-redux'
import { addNewAnecdote } from '../reducers/anecdoteReducer'

const FormRow = ({ children }) => <div style={ { display: 'flex', flexFlow: 'column', gap: '8px' } } >{ children }</div>

const AnecdoteForm = () => {
  const dispatch = useDispatch()

  const addAnecdote = (event) => {
    event.preventDefault()
    const content = event.target.content.value
    if (content) {
      dispatch(addNewAnecdote(content))
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
        <input type='submit' value='Create anecdote' />
      </form>
    </div>
  )
}

export default AnecdoteForm