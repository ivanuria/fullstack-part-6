import { useSelector, useDispatch } from 'react-redux'
import { voteTo } from '../reducers/anecdoteReducer'

const Anecdote = ({ anecdote, handleVote, ...props }) => {
  return (
    <li style={ { marginBlock: '.5rem' } } { ...props }>
      <div>
        {anecdote.content}
      </div>
      <div>
        has {anecdote.votes}
        <button onClick={() => handleVote(anecdote.id) } style={ { marginInlineStart: '1ch' } }>vote</button>
      </div>
    </li>
  )
}

const AnecdoteList = () => {
  const anecdotes = useSelector(({ anecdotes, filter }) => {
    if (filter === '') return anecdotes
    return anecdotes.filter(anecdote => anecdote.content.toLowerCase().includes(filter.toLowerCase()))
  })
  const dispatch = useDispatch()

  const vote = (id) => {
    console.log('vote to', id)
    dispatch(voteTo(id))
  }

  return (
  <ul style={ { paddingInlineStart: '0px', listStyleType: 'none' } }>
    {anecdotes.sort((a, b) => b.votes - a.votes).map(anecdote =>
      <Anecdote key={ anecdote.id } anecdote={ anecdote } handleVote={ vote } />
    )}
  </ul>
  )
}

export default AnecdoteList