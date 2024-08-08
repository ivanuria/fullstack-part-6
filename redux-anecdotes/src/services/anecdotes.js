import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return await response.data
}

const createNew = async (content) => {
  if (content) {
    const addNewAnecdote = {
      content: content,
      votes: 0
    }
    const response = await axios.post(baseUrl, addNewAnecdote)
    return await response.data
  }
}

const updateItem = async (id, content) => {
  if (content) {
    await axios.put(`${baseUrl}/${id}`, content)
  }
}

export default {
  getAll,
  createNew,
  updateItem
}