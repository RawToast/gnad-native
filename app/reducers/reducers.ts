import { AnyAction } from 'redux'

export const SET_GAME_ID = 'SET_GAME_ID'
export const SET_TEXT = 'SET_TEXT'

export const gameId = (state = '', action: AnyAction) => {
  switch (action.type) {
    case SET_GAME_ID:
      return action.payload.gameId
    default:
      return state
  }
}

export const gameText = (state = '', action: AnyAction) => {
  switch (action.type) {
    case SET_TEXT:
      return action.payload.gameText
    default:
      return state
  }
}
