import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import CImage from './CImage'
import CText from './CText'

const CHeader = (props) => {
  return (
    <View style={{flexDirection:"row",height:50,marginTop:50,marginHorizontal:20,alignItems:"center"}}>
        <TouchableOpacity onPress={() => props.navigation.goBack()} style={{flex:props.firstText ? 2 : 1,alignItems:"flex-start"}}>
            {
                props.showBack &&
                <CImage.ArrowBack />
            }
            {
                props.firstText &&
                <CText.LoginText style={{textAlign:"center"}}>{props.firstText}</CText.LoginText>
            }
        </TouchableOpacity>
        <View style={{flex: props.headingTitle ? 1.2 : 1}}>
            {
                props.headingTitle &&
                <CText.LoginText>{props.headingTitle}</CText.LoginText>
            }
        </View>
        <View style={{flex:1,alignItems:"flex-end",}}>
            {
                props.showLogout &&
                <TouchableOpacity onPress={() => props.navigation.navigate("Profile")} style={{width:97,height:36,borderRadius:100,backgroundColor:"#202137",alignItems:"center",justifyContent:"center"}}>
                    <CText.LogoutText>{"Logout"}</CText.LogoutText>
                </TouchableOpacity>
                
            }
        </View>
    </View>
  )
}

export default CHeader

const styles = StyleSheet.create({})