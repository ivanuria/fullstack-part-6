import { useSelector, useDispatch } from 'react-redux'
import { voteTo } from '../reducers/anecdoteReducer'

const Anecdote = ({ anecdote, handleVote }) => {
  return (
    <li>
      <div>
        {anecdote.content}
      </div>
      <div>
        has {anecdote.votes}
        <button onClick={() => handleVote(anecdote.id) }>vote</button>
      </div>
    </li>
  )
}

const Anecdotes = () => {
  const anecdotes = useSelector(state => state)
  const dispatch = useDispatch()

  const vote = (id) => {
    console.log('vote to', id)
    dispatch(voteTo(id))
  }

  return (
    <ul style={ { paddingLeft: '0px', listStyleType: 'none' } }>
    {anecdotes.map(anecdote =>
      <Anecdote key={ anecdote.id } anecdote={ anecdote } handleVote={ vote } />
    )}
  </ul>
  )
}

export default Anecdotes