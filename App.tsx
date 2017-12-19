import React from 'react'
import { Provider } from 'react-redux'

import { StyleSheet, View } from 'react-native'
import GameText from './app/components/GameText'
import GameInput from './app/components/GameInput'
import Store from './app/store'

export default class App extends React.Component<{}> {
  store = Store()
  render () {
    return (
      <Provider store={this.store}>
        <View style={styles.container}>
          <GameText/>
          <GameInput/>
        </View>
      </Provider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
