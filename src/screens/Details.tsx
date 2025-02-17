import { StyleSheet, Text, View } from 'react-native'
import React from 'react'


import {NativeStackScreenProps} from "@react-navigation/native-stack"
import {RootStackParamList} from '../screens/App'
import { useNavigation } from '@react-navigation/native'
import {NativeStackNavigationProp} from "@react-navigation/native-stack"

type DetailsProps = NativeStackScreenProps<RootStackParamList,'Details'>


const Details = ({route}:DetailsProps) =>
  
  {
    const {productId}= route.params  
useNavigation<NativeStackNavigationProp<RootStackParamList>>()
  return (
    <View>
      <Text>Details</Text>
    </View>
  )
}

export default Details

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