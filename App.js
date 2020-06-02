import React from 'react'
import { View, Text, SafeAreaView, StyleSheet } from 'react-native'

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={[styles.container, styles.pink]}>
        <Text>Hello baw!</Text>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  pink: {
    backgroundColor: 'pink',
  },
  
  container: {
    margin: 30,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  }
})

export default App