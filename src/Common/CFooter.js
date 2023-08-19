import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CText from './CText'
import CImage from './CImage'

const CFooter = () => {
  return (
    <View style={{ flexDirection:"row",alignItems:"center",paddingHorizontal:20,justifyContent:"space-between",width:"100%",height:66,backgroundColor:"#212D50",borderRadius:100}}>
        <View style={{flexDirection:"row",width:116,height:40,borderRadius:25,justifyContent:"center",backgroundColor:"#2C3A61",alignItems:"center"}}>
            <CImage.Dollar />
            <CText.LabelText>{"Finance"}</CText.LabelText>
        </View>
        <View style={{flexDirection:"row"}}>
            <CImage.TODO />
            <CText.LabelText>{"Todo Manager"}</CText.LabelText>
        </View>
      
    </View>
  )
}

export default CFooter

const styles = StyleSheet.create({})