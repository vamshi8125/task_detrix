import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CText from './CText'

const CardContaineView = (props) => {
  return (
    <View style={[{  width:"100%",height:"auto", paddingVertical:  10,paddingLeft:20,paddingRight:20,backgroundColor:"white",borderRadius:10,paddingVertical:15,marginVertical:10,shadowOffset: { width: -2, height: 4 },
    shadowColor: '#171717',
    shadowOpacity: 0.2,
    shadowRadius: 3, }]}>
        {props.children}
    </View>
  )
}

export default CardContaineView

const styles = StyleSheet.create({})