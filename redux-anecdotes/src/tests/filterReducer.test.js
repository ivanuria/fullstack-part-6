import { describe, test } from 'node:test'
import assert from 'node:assert'
import deepFreeze from 'deep-freeze'
import filterReducer from '../reducers/filterReducer.js'
import { setFilterTo } from '../reducers/filterReducer.js'

describe('filterReducer', () => {
  test('returns initial state by default', () => {
    const states = filterReducer(undefined, { type: 'NONE' })
    assert.strictEqual(states, '')
  })

  test('changes filter prperly', () => {
    const initialState = ''
    deepFreeze(initialState)
    const statesTest = filterReducer(initialState, setFilterTo('test'))
    assert.strictEqual(statesTest, 'test')
    const statesIdontunderstand = filterReducer(initialState, setFilterTo('i dont understand'))
    assert.strictEqual(statesIdontunderstand, 'i dont understand') // I do actually
  })
})