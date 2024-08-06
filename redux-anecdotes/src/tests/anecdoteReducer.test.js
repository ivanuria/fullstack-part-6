import { describe, test } from 'node:test'
import assert from 'node:assert'
import reducer from '../reducers/anecdoteReducer.js'
import { anecdotesAtStart, voteTo, addNewAnecdote } from '../reducers/anecdoteReducer.js'
import deepFreeze from 'deep-freeze'

describe('AnecdoreReducerTests', () => {
  test('initial values when no object given', () => {
    const states = reducer(undefined, { type: 'NOACTION' })
    assert.deepStrictEqual(anecdotesAtStart, states.map(state => state.content))
  })

  test('vote to first anecdote', () => {
    const states = reducer(undefined, { type: 'NOACTION' })
    const toVote = states[0].id

    deepFreeze(states)
    const newStates = reducer(states, voteTo(toVote))

    assert.strictEqual(newStates[0].votes, 1)
  })

  test('adds new anecdote', () => {
    const states = reducer(undefined, { type: 'NOACTION' })
    const content = 'This is a test, not a party in the U.S.A'

    deepFreeze(states)
    const newStates = reducer(states, addNewAnecdote(content))

    assert.ok(newStates.map(state => state.content).includes(content), true)
  })
})