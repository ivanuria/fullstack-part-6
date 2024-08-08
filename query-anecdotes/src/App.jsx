import AnecdoteForm from './components/AnecdoteForm'
import Notifications from './components/Notifications'
import { useQuery, useQueryClient, useMutation } from '@tanstack/react-query'
import { getAnecdotes, updateAnecdote } from './requests'
import { useNotificationsDispatch, createNotificationAction } from './components/NotificationContext'

const App = () => {
  const notificationDispatch = useNotificationsDispatch()
  const queryClient = useQueryClient()
  const updateAnecdoteMutation = useMutation({
    mutationFn: updateAnecdote,
    onSuccess: (updatedAnecdote) => {
      const anecdotes = queryClient.getQueryData(['anecdotes'])
      console.log(updatedAnecdote)
      queryClient.setQueryData(['anecdotes'], anecdotes.map(anecdote => anecdote.id !== updatedAnecdote.id ? anecdote : updatedAnecdote))
    }
  })
  const handleVote = (anecdote) => {
    updateAnecdoteMutation.mutate({ ...anecdote, votes: anecdote.votes + 1 })
    notificationDispatch(createNotificationAction(`Vote for '${anecdote.content}' registered`))
  }
  const result = useQuery({
    queryKey: ['anecdotes'],
    queryFn: getAnecdotes
  })
  if (result.isLoading) {
    return <div>Loading data...</div>
  }
  if (result.isError) {
    return <div>Anecdote Service unavailable due to a problematic server. Please wait till we medicate it properly.</div>
  }
  const anecdotes = result.data
  return (
    <div>
      <h1>Anecdote app</h1>
      <Notifications />
      <AnecdoteForm />
      <h2>Anecdote List: </h2>
      <ul style={ { listStyleType: 'none', paddingInlineStart: 0 } } >
      {anecdotes.map(anecdote =>
        <li key={anecdote.id} style={ { paddingBlock: '.5rem' } }>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => handleVote(anecdote)}>vote</button>
          </div>
        </li>
      )}
      </ul>
    </div>
  )
}

export default App
