import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import { initialState, GameState } from './initialState'
import { getRootReducer } from '../reducers'

export default (state: GameState = initialState) =>
  applyMiddleware(thunk)(createStore)(getRootReducer(), state)
