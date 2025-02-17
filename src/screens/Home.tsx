import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import {NativeStackScreenProps} from "@react-navigation/native-stack"


const Home = () => {
  return (
    <View>
      <Text>Home</Text>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({



  container:{
    flex:1,
    alignItems:"center",
    justifyContent:"center"
  },
  smallText:{
    color:"#000000"
  }
})