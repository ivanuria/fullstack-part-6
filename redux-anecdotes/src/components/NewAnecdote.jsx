
import { useDispatch } from 'react-redux'
import { addNewAnecdote } from '../reducers/anecdoteReducer'

const FormRow = ({ children }) => <div style={ { display: 'flex', flexFlow: 'column', gap: '8px' } } >{ children }</div>

const NewAnecdote = () => {
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
    <form onSubmit={ addAnecdote }>
      <FormRow>
        <label htmlFor='content'>Content:</label>
        <input id='content' name='content' />
      </FormRow>
      <input type='submit' value='Create anecdote' />
    </form>
  )
}

export default NewAnecdote