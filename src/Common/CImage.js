import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const WelcomImage = React.memo(({children,...otherProps}) => ( <Image  source={require("../Assets/images/Welcome.png")} style={{width:"90%",height:100,resizeMode:"contain"}}/>))
const GoogleImage = React.memo(({children,...otherProps}) => ( <Image  source={require("../Assets/images/google.png")} style={{width:29,height:29,resizeMode:"contain"}}/>))
const ArrowBack = React.memo(({children,...otherProps}) => ( <Image  source={require("../Assets/images/arrow_back.png")} style={{width:54,height:32,resizeMode:"contain"}}/>))
const LogoImage = React.memo(({children,...otherProps}) => ( <Image  source={children} style={{width:29,height:29,resizeMode:"contain"}}/>))
const ArrowUp = React.memo(({children,...otherProps}) => ( <Image  source={require("../Assets/images/arrow_up.png")} style={{width:29,height:20,resizeMode:"contain"}}/>))
const ArrowDown = React.memo(({children,...otherProps}) => ( <Image  source={require("../Assets/images/arrow_down.png")} style={{width:29,height:20,resizeMode:"contain"}}/>))
const Calender = React.memo(({children,...otherProps}) => ( <Image  source={require("../Assets/images/calendar.png")} style={{width:29,height:20,resizeMode:"contain"}}/>))
const Dollar = React.memo(({children,...otherProps}) => ( <Image  source={require("../Assets/images/dollar.png")} style={{width:29,height:20,resizeMode:"contain"}}/>))
const TODO = React.memo(({children,...otherProps}) => ( <Image  source={require("../Assets/images/todo.png")} style={{width:29,height:20,resizeMode:"contain"}}/>))

export default {
    WelcomImage,
    GoogleImage,
    ArrowBack,
    LogoImage,
    ArrowDown,
    ArrowUp,
    Calender,
    Dollar,
    TODO
}

const styles = StyleSheet.create({})