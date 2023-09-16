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
const ProfileIcon = React.memo(({children,...otherProps}) => ( <Image  source={require("../Assets/images/profile_icon.png")} style={{width:71,height:71,resizeMode:"contain"}}/>))
const ShareIcon = React.memo(({children,...otherProps}) => ( <Image  source={require("../Assets/images/Share.png")} style={{width:30,height:30,resizeMode:"contain"}}/>))
const AddIcon = React.memo(({children,...otherProps}) => ( <Image  source={require("../Assets/images/AddIcon.png")} style={{width:30,height:30,resizeMode:"contain"}}/>))
const PrescriptionImage = React.memo(({children,...otherProps}) => ( <Image  source={require("../Assets/images/Prescription.png")} style={{width:140,height:130,resizeMode:"contain"}}/>))
const FilesImage = React.memo(({children,...otherProps}) => ( <Image  source={require("../Assets/images/Files.png")} style={{width:80,height:60,resizeMode:"contain"}}/>))

export default {
    WelcomImage,
    GoogleImage,
    ArrowBack,
    LogoImage,
    ArrowDown,
    ArrowUp,
    Calender,
    Dollar,
    TODO,
    ProfileIcon,
    ShareIcon,
    AddIcon,
    PrescriptionImage,
    FilesImage
}

const styles = StyleSheet.create({})