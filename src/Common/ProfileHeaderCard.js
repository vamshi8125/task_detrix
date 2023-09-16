import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CImage from './CImage'
import CText from './CText'

const ProfileHeaderCard = () => {
    return (
        <View style={{ width: "100%", borderRadius: 12, padding: 12, flexDirection: "row", backgroundColor: "#FFFFFF",justifyContent:"space-between" }}>
            <View style={{flexDirection:"row"}}>
            <CImage.ProfileIcon />
            <View style={{ paddingLeft: 15 }}>
                <CText.Username>{"Yamparala Rahul"}</CText.Username>
                <CText.Username style={{ fontSize: 13, paddingVertical: 5 }}>{"28 Male"}</CText.Username>
                <CText.Username style={{ fontSize: 13 }}>{"C/O : Have fever with Cough having spots of blood"}</CText.Username>
            </View>
            </View>
            
            <View style={{alignItems:"flex-start",marginRight:20}}>
                <CImage.ShareIcon />
            </View>
        </View>
    )
}

export default ProfileHeaderCard

const styles = StyleSheet.create({})