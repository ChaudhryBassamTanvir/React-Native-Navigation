import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import Home from './src/screens/Home'
import Details from './src/screens/Details'



export type RootStackParamList={
  Home:undefined,
  Details:{productId:string}
}

const App = () => {
  return (
    <View>
      <Text>App of Bassam Tanvir </Text>
    </View>
  )
}

export default App

const styles = StyleSheet.create({})