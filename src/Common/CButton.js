import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import CText from './CText'

const CButton = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress} style={{width:237,height:56,alignItems:"center",justifyContent:"center",backgroundColor:"#212D50",borderRadius:100}}>
      <CText.ButtonText>{props.text}</CText.ButtonText>
    </TouchableOpacity>
  )
}

export default CButton

const styles = StyleSheet.create({})