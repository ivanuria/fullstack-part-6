import { describe, test } from 'node:test'
import assert from 'node:assert'
import reducer from '../reducers/anecdoteReducer.js'
import { anecdotesAtStart, voteTo } from '../reducers/anecdoteReducer.js'
import deepFreeze from 'deep-freeze'

describe('AnecdoreReducerTests', () => {
  test('initial values when no object given', () => {
    const states = reducer(undefined, { type: 'NOACTION' })
    assert.deepStrictEqual(anecdotesAtStart, states.map(state => state.content))
  })

  test('vote to first anecdote', () => {
    const states = reducer(undefined, { type: 'NOACTION' })
    const toVote = states[0].id
    console.log('toVote', toVote)
    deepFreeze(states)
    const newStates = reducer(states, voteTo(toVote))

    assert.strictEqual(newStates[0].votes, 1)
  })
})