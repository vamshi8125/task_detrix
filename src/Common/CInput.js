import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import CText from './CText'

const CInput = (props) => {
  return (
    <View style={{width:"100%",marginTop:10,alignSelf:"center"}}>
        {
            props.label &&
            <CText.LabelText>{props.label}</CText.LabelText>
        }
     <TextInput 
        value={props.value}
        onChangeText={props.onChangeText}
        placeholder={props.placeholder}
        style={styles.inputStyle}
     />
    </View>
  )
}

export default CInput

const styles = StyleSheet.create({
    inputStyle:{
        width:344,
        height:45,
        backgroundColor:"#2B2D48",
        borderRadius:10,
        padding:8,
        marginTop:5,
        shadowColor:"#fff",
        shadowOffset:0.3,
        shadowRadius:0.5,
        shadowOpacity:0.4,
        color:"#ffffff",

    }
})