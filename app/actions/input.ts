import { SET_TEXT } from '../reducers'
import { createGame, sendInput, SlackServerResponse } from '../client'
import { Dispatch } from 'react-redux'

export const createNewGame = (gameId: string) => (dispatch: Dispatch<any>) => {
  createGame(gameId)
    .then((ssr: SlackServerResponse) => {
      dispatch({
        type: SET_TEXT,
        payload: {
          gameText: ssr.text
        }
      })
    })
}

export const sendPlayerInput = (gameId: string, input: string) => (dispatch: Dispatch<any>) => {
  sendInput(gameId, input)
    .then((ssr: SlackServerResponse) => {
      dispatch({
        type: SET_TEXT,
        payload: {
          gameText: ssr.text
        }
      })
    })
}

