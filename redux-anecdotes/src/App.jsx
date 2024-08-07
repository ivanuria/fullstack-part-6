import AnecdoteList from './components/AnecdoteList'
import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteFilter from './components/AnecdoteFilter'

const App = () => {
  return (
    <div>
      <h1>Anecdotes</h1>
      <AnecdoteFilter />
      <AnecdoteList />
      <AnecdoteForm />
    </div>
  )
}

export default App