import { combineReducers } from 'redux'
import { gameId, gameText } from './reducers'

export * from './reducers'

export function getRootReducer () {
  return combineReducers({ gameId, gameText })
}
