import { useDispatch } from "react-redux"
import FormRow from "./FormRow"
import { setFilterTo } from "../reducers/filterReducer"

const AnecdoteFilter = () => {
  const dispatch = useDispatch()

  const handleChange = (event) => {
    const filter = event.target.value
    dispatch(setFilterTo(filter))
  }
  const style = {
    marginBlock: '1rem'
  }

  return (
    <div className='anecdotes-filter' style={ style }>
      <FormRow>
        <label htmlFor='anecdotes-filter'>Filter: </label>
        <input id='anecdotes-fitler' onChange={ handleChange } />
      </FormRow>
    </div>
  )
}

export default AnecdoteFilter