import React from 'react'
import { Text, View } from 'react-native'
import { connect } from 'react-redux'
import { GameState } from '../store/initialState'

const GameText = (props: GameTextProps) => {
  return (
    <View>
      <Text>{ props.gameText }</Text>
    </View>
  )
}

type GameTextProps = {
  gameText: string
}

const mapStateToProps = (state: GameState) => {
  return {
    gameText: state.gameText
  }
}

const ReactiveGameText = connect(mapStateToProps)(GameText)

export default ReactiveGameText
