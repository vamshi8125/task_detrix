import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'

const ContainerView = (props) => {
  return (
    <LinearGradient colors={['#2E2F4C', '#202137']} style={[{flex:1,alignContent:"center"},props.style]}>
    {props.children}
  </LinearGradient>
  )
}

export default ContainerView

const styles = StyleSheet.create({})