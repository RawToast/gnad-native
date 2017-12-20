import React from 'react'
import { TextInput, View, Button } from 'react-native'

import { connect, Dispatch } from 'react-redux'
import { GameState } from '../store/initialState'
import { createNewGame, sendPlayerInput } from '../actions/input'

const GameInput = (props: GameInputProps) => {
  return (
    <View>
      <TextInput
        placeholder='Commands here'
        onSubmitEditing={(event) => props.sendRequest(props.gameId, event.nativeEvent.text)}
        clearTextOnFocus={true}
      >
      </TextInput>
      <Button
        title="Make new"
        onPress={() => props.createGame(props.gameId)}
      >New</Button>
    </View>
  )
}

type GameInputProps = {
  gameId: string
}

const mapStateToProps = (state: GameState) => {
  return {
    gameId: state.gameId
  }
}

const mapDispatchToProps = (dispatch: Dispatch<any>) => {
  return {
    sendRequest: (gameId: string, input: string) => {
      sendPlayerInput(gameId, input)(dispatch)
    },
    createGame: (gameId: string) => {
      createNewGame(gameId)(dispatch)
    }
  }
}

const ReactiveGameInput = connect(
  mapStateToProps,
  mapDispatchToProps
)(GameInput)

export default ReactiveGameInput
