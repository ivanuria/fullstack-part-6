import Anecdotes from './components/Anecdotes'
import NewAnecdote from './components/NewAnecdote'

const App = () => {
  return (
    <div>
      <h1>Anecdotes</h1>
      <Anecdotes />
      <h2>Create New</h2>
      <NewAnecdote />
    </div>
  )
}

export default App