import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import CText from './CText'
import CImage from './CImage'

const BalanceView = React.memo(({ children, ...otherProps }) => (
    <View style={{ width: 177, height: 97, backgroundColor: "#1D1C2F", borderRadius: 10, alignItems: "center", justifyContent: "center" }}>
        <CText.LogoutText style={{ color: "#CAD7E9" }}>{otherProps.title}</CText.LogoutText>
        <CText.LoginText style={{ color: "#FDFDFE", fontSize: 30 }}>{otherProps.amount}</CText.LoginText>
    </View>
))
const TotalIncomeView = React.memo(({ children, ...otherProps }) => (
    <View style={{ width: "100%", height: 59, backgroundColor: "#1D1C2F", borderRadius: 10, alignItems: "center", justifyContent: "center", flexDirection: "row", justifyContent: "space-between", paddingHorizontal: 10 }}>
        <View style={{ flexDirection: "row" }}>

            <CImage.LogoImage children={otherProps.logo} />
            <View style={{ marginLeft: 10 }}>
                <CText.LoginText style={{ color: "#9494A1", fontSize: 16 }}>{otherProps.title}</CText.LoginText>
                <CText.LogoutText style={{ color: "#9494A1", fontSize: 12, paddingTop: 5 }}>{otherProps.type} : <CText.LogoutText style={{ color: otherProps.amountColor, fontSize: 12 }}>{otherProps.amount} </CText.LogoutText>  </CText.LogoutText>
            </View>

        </View>
        <View style={{ alignItems: "flex-end" }}>
            <CText.LogoutText style={{ color: "#9494A1", fontSize: 12 }}>{otherProps.tag} </CText.LogoutText>
            <CText.LogoutText style={{ color: "#9494A1", fontSize: 12, paddingTop: 5 }}>{otherProps.date} </CText.LogoutText>
        </View>

    </View>
))
const ProfileCardTitleView = React.memo(({ children, ...otherProps }) => (
    <View style={{ paddingHorizontal: 10, paddingVertical: 10 }}>
        <View style={{ flexDirection: "row", justifyContent: "space-between", paddingHorizontal: 10, paddingVertical: 10, alignItems: "center" }}>
            <CText.Username>{otherProps.title}</CText.Username>
            <Image source={otherProps.icon} style={{ height: otherProps.height, width: otherProps.width, resizeMode: "contain" }} />

        </View>
        <View style={{ backgroundColor: "#E0E0E0", height: 1, width: "100%" }} />
    </View>
))

const ProfileCardContentView = React.memo(({ children, ...otherProps }) => (
    <View style={[{ flexDirection: "row", paddingHorizontal: 10, paddingVertical: otherProps.bgColor ? 5 : 10, alignItems: "center" }]}>
        <View style={{ backgroundColor: otherProps.bgColor, borderRadius: 55, height: otherProps.bgColor ? otherProps.height + 30 : null, width: otherProps.bgColor ? otherProps.width + 15 : null, alignItems: "center", justifyContent: "center" }}>
            <Image source={otherProps.icon} style={{ height: otherProps.height, width: otherProps.width, resizeMode: "contain" }} />
        </View>

        <View style={{ paddingLeft: 10 }}>
            <CText.ProfileContentText style={{ color: "#878A90", fontSize: 12 }}>{otherProps.title}</CText.ProfileContentText>
            <CText.ProfileContentText>{otherProps.subTitle.length > 20 ? `${otherProps.subTitle.substring(0, 20)}...` : otherProps.subTitle}</CText.ProfileContentText>
        </View>

    </View>
))
const ProfileCardAllergiesContentView = React.memo(({ children, ...otherProps }) => (
    <View style={[{
        flexDirection: "row", width: otherProps.width ? otherProps.width : "85%", height: 90,marginRight:20, alignSelf: "center", marginVertical: 5, paddingHorizontal: 10, paddingVertical: otherProps.bgColor ? 5 : 10, alignItems: "center", backgroundColor: "#FFFFFF", borderRadius: 12, shadowOffset: { width: -2, height: 4 },
        shadowColor: '#171717',
        shadowOpacity: 0.2,
        shadowRadius: 3,
    }]}>
        <View style={{ paddingLeft: 10, width: "85%" }}>
            <CText.ProfileContentText style={{ color: "#878A90", fontSize: 12 }}>{otherProps.title}</CText.ProfileContentText>
            <View style={{ flexDirection: "row", justifyContent: "space-between", width: "100%" }}>
                <CText.ProfileContentText>{otherProps.subTitle.length > 20 ? `${otherProps.subTitle.substring(0, 20)}...` : otherProps.subTitle}</CText.ProfileContentText>
                {
                    otherProps.subTitle1 &&
                    <CText.ProfileContentText style={{ color: otherProps.color1 }}>{otherProps.subTitle1.length > 20 ? `${otherProps.subTitle1.substring(0, 20)}...` : otherProps.subTitle1}</CText.ProfileContentText>
                }
            </View>
            {
                otherProps.secondLine
                && <View style={{ flexDirection: "row", justifyContent: "space-between", width: "100%" }}>
                    <CText.ProfileContentText>{otherProps.secondLine.length > 10 ? `${otherProps.secondLine.substring(0, 10)}...` : otherProps.secondLine}</CText.ProfileContentText>
                    {
                        otherProps.subTitle1 &&
                        <CText.ProfileContentText style={{ color: otherProps.color2 }}>{otherProps.secondLine1.length > 10 ? `${otherProps.secondLine1.substring(0, 10)}...` : otherProps.secondLine1}</CText.ProfileContentText>
                    }
                </View>
            }


        </View>

    </View>
))

const ProfileCardRadioButtonView = React.memo(({ children, ...otherProps }) => (
    <View style={[{
        flexDirection: "row", width: "85%", alignSelf: "center", paddingHorizontal: 10, paddingVertical: otherProps.bgColor ? 5 : 10, alignItems: "center", justifyContent: "space-between", backgroundColor: "white", borderRadius: 10, marginVertical: 10, shadowOffset: { width: -2, height: 4 },
        shadowColor: '#171717',
        shadowOpacity: 0.2,
        shadowRadius: 3,
    }]}>

        <CText.ProfileContentText style={{ color: "#878A90", fontSize: 16 }}>{otherProps.title}</CText.ProfileContentText>
        {
            otherProps.actvieItem
                ? <Image source={require("../Assets/images/CheckBox.png")} style={{ height: 20, width: 20, }} />
                : <View style={{ width: 20, height: 20, borderRadius: 10, borderColor: "#868685", borderWidth: 1 }} />
        }

    </View>
))
const ProfileCardRightContentView = React.memo(({ children, ...otherProps }) => (
    <>
    <View style={{ flexDirection: "row", justifyContent: "space-between", width: "100%" }}>
        <CText.ProfileContentText style={{ color: "#878A90", fontSize: 16 }}>{otherProps.title}</CText.ProfileContentText>
        {
            otherProps.buttonName
            && <View style={{ flexDirection: "row",alignItems:"center"}}>
                <Image source={otherProps.icon} style={{ height: otherProps.height, width: otherProps.width, resizeMode: "contain" }} />
                <CText.Username style={{paddingLeft:10}}>{otherProps.buttonName}</CText.Username>
            </View>
        }
        
    </View>
    <View style={{ backgroundColor: "#E0E0E0", height: 1, width: "100%",marginTop:5 }} />
    </>
))

export default {
    BalanceView,
    TotalIncomeView,
    ProfileCardTitleView,
    ProfileCardContentView,
    ProfileCardAllergiesContentView,
    ProfileCardRadioButtonView,
    ProfileCardRightContentView
}

const styles = StyleSheet.create({
    loginTextStyle: {
        color: "#FFFFFF",
        fontSize: 20,
        fontFamily: "Roboto-Regular"
    },
    logoutTextStyle: {
        color: "#FF3974",
        fontSize: 16,
        fontFamily: "Roboto-Regular"
    }
})