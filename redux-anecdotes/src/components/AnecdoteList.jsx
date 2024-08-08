import { useSelector, useDispatch } from 'react-redux'
import { updateAnecdote } from '../reducers/anecdoteReducer'
import { addNotificationInfo } from '../reducers/notificationsReducer'

const Anecdote = ({ anecdote, handleVote, ...props }) => {
  return (
    <li style={ { marginBlock: '.5rem' } } { ...props }>
      <div>
        {anecdote.content}
      </div>
      <div>
        has {anecdote.votes}
        <button onClick={() => handleVote(anecdote) } style={ { marginInlineStart: '1ch' } }>vote</button>
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

  const handleVote = (anecdote) => {
    dispatch(updateAnecdote({ ...anecdote, votes: anecdote.votes + 1 }))
    dispatch(addNotificationInfo(`You voted for '${anecdote.content}'`))
  }

  return (
  <ul style={ { paddingInlineStart: '0px', listStyleType: 'none' } }>
    {[...anecdotes].sort((a, b) => b.votes - a.votes).map(anecdote =>
      <Anecdote key={ anecdote.id } handleVote={ handleVote } anecdote={ anecdote } />
    )}
  </ul>
  )
}

export default AnecdoteList