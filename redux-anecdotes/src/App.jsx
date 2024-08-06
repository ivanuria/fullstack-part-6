import Anecdotes from './components/Anecdotes'

const App = () => {
  return (
    <div>
      <h1>Anecdotes</h1>
      <Anecdotes />
      <h2>create new</h2>
      <form>
        <div><input /></div>
        <button>create</button>
      </form>
    </div>
  )
}

export default App