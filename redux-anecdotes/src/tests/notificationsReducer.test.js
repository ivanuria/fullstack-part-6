import { describe, test } from 'node:test'
import assert from 'node:assert'
import notificationsReducer from '../reducers/notificationsReducer.js'
import { addNotificationError, addNotificationInfo, deleteNotification, initialState } from '../reducers/notificationsReducer.js'
import deepFreeze from 'deep-freeze'

describe('notificationsReducer', () => {
  test('returns initial state if void', () => {
    const state = notificationsReducer(undefined, { type: 'best friend' })
    assert.deepStrictEqual(state, initialState)
  })

  test('adds new INFO', () => {
    const state = notificationsReducer([], addNotificationInfo('This is info'))
    assert.strictEqual(state.filter(s => s.message === 'This is info').length, 1)
    assert.strictEqual(state.filter(s => s.type === 'INFO').length, 1)
  })

  test('adds new ERROR', () => {
    const state = notificationsReducer([], addNotificationError('This is error'))
    assert.strictEqual(state.filter(s => s.message === 'This is error').length, 1)
    assert.strictEqual(state.filter(s => s.type === 'ERROR').length, 1)
  })

  test('deletes a Notification', () => {
    const initialNotifications = [
      {
        id: 1,
        message: 'i don\'t know why',
        type: 'INFO'
      },
      {
        id: 2,
        message: 'delete me',
        type: 'ERROR'
      },
      {
        id: 3,
        message: 'everything goes all right',
        type: 'ERROR'
      }
    ]
    deepFreeze(initialNotifications)
    const state = notificationsReducer(initialNotifications, deleteNotification(2))
    assert.strictEqual(state.length, 2)
    assert.strictEqual(state.filter(s => s.id === 2).length, 0)
    assert.strictEqual(state.filter(s => s.message === 'delete me').length, 0)
  })
})