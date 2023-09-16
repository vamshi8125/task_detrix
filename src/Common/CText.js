import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const LoginText = React.memo(({children,...otherProps}) => (
    <Text style={{...styles.loginTextStyle,...otherProps.style}}>{children}</Text>
))
const LogoutText = React.memo(({children,...otherProps}) => (
    <Text style={{...styles.logoutTextStyle,...otherProps.style}}>{children}</Text>
))
const AmountText = React.memo(({children,...otherProps}) => (
    <Text style={{...styles.amountTextStyle,...otherProps.style}}>{children}</Text>
))
const LabelText = React.memo(({children,...otherProps}) => (
    <Text style={{...styles.labelTextStyle,...otherProps.style}}>{children}</Text>
))
const ButtonText = React.memo(({children,...otherProps}) => (
    <Text style={{...styles.labelTextStyle,...otherProps.style}}>{children}</Text>
))
const Username = React.memo(({children,...otherProps}) => (
    <Text style={{...styles.userNameStyle,...otherProps.style}}>{children}</Text>
))
const UpdatedText = React.memo(({children,...otherProps}) => (
    <Text style={{...styles.updatedTextStyle,...otherProps.style}}>{children}</Text>
))
const ProfileContentText = React.memo(({children,...otherProps}) => (
    <Text style={{...styles.profileContentTextStyle,...otherProps.style}}>{children}</Text>
))

export default {
    LoginText,
    LogoutText,
    AmountText,
    LabelText,
    ButtonText,
    Username,
    UpdatedText,
    ProfileContentText
}

const styles = StyleSheet.create({
    loginTextStyle:{
        color:"#FFFFFF",
        fontSize:20,
        fontFamily:"Roboto-Regular"
    },
    logoutTextStyle:{
        color:"#FF3974",
        fontSize:16,
        fontFamily:"Roboto-Regular"
    },
    amountTextStyle:{
        color:"#FDFDFE",
        fontSize:28,
        fontFamily:"Roboto-Regular"
    },
    labelTextStyle:{
        fontSize:16,
        color:"#CAD7E9",
        fontFamily:"Roboto-Regular"
    },
    userNameStyle:{
        fontSize:16,
        color:"#0E0F0C"
    },
    updatedTextStyle:{
        color:"#868685",
        fontSize:16
    },
    profileContentTextStyle:{
        color:"#1F2327",
        fontSize:14
    }
})