import { useQueryClient, useMutation } from '@tanstack/react-query'
import { createAnecdote } from '../requests'
import { createNotificationAction, useNotificationsDispatch } from './NotificationContext'

const AnecdoteForm = () => {
  const notificationDispatch = useNotificationsDispatch()
  const queryClient = useQueryClient()
  const newAnecdoteMutation = useMutation({
    mutationFn: createAnecdote,
    onSuccess: newAnecdote => {
      const anecdotes = queryClient.getQueryData(['anecdotes'])
      queryClient.setQueryData(['anecdotes'], anecdotes.concat(newAnecdote))
      notificationDispatch(createNotificationAction(`New Anecdote created: '${newAnecdote.content}'`))
    },
    onError: (error) => {
      console.log(error)
      if (error.response && error.response.data && error.response.data.error === 'too short anecdote, must have length 5 or more') {
        notificationDispatch(createNotificationAction(`Anecdote must be at least 5 characters long`, 'ERROR'))
      } else {
        notificationDispatch(createNotificationAction(`Something's wrong with the server`, 'ERROR'))
      }
    }
  })

  const onCreate = (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    newAnecdoteMutation.mutate({ content, votes: 0 })
  }

  return (
    <div>
      <h2>Create New Anecdote</h2>
      <form onSubmit={onCreate}>
        <label htmlFor='anecdote'>New Anecdote: </label><input id='anecdote' name='anecdote' />
        <button type="submit">Create Anecdote</button>
      </form>
    </div>
  )
}

export default AnecdoteForm
