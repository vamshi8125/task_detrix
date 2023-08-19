import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import ContainerView from '../Common/ContainerView'
import CImage from '../Common/CImage'
import CText from '../Common/CText'

const SplashScreen = (props) => {
    return (
        <ContainerView style={{ alignItem: "center", justifyContent: "center", alignContent: "center" }}>
            <View style={{ alignItems: "center" }}>
                <CImage.WelcomImage />
                <View style={{ marginTop: 156 }}>
                    <CText.LoginText style={{ textAlign: "center" }}>{"LogIn or SignUp, using "}</CText.LoginText>
                    <TouchableOpacity onPress={() => props.navigation.navigate("Home")} style={{ backgroundColor: "#1D1C2F", width: 222, height: 64, borderRadius: 100, marginTop: 25, flexDirection: "row", alignItems: "center", paddingHorizontal: 20, justifyContent: "center" }}>
                        <CImage.GoogleImage />
                        <CText.LoginText style={{ paddingLeft: 20 }}>{"Google"}</CText.LoginText>
                    </TouchableOpacity>
                </View>

            </View>

        </ContainerView>


    )
}

export default SplashScreen

const styles = StyleSheet.create({})