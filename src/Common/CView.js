import { StyleSheet, Text, View } from 'react-native'
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
    <View style={{ width: "100%", height: 59, backgroundColor: "#1D1C2F", borderRadius: 10, alignItems: "center", justifyContent: "center", flexDirection: "row", justifyContent: "space-between",paddingHorizontal:10 }}>
        <View style={{ flexDirection: "row" }}>
           
                <CImage.LogoImage children={otherProps.logo} />
            <View style={{ marginLeft: 10 }}>
                <CText.LoginText style={{ color: "#9494A1",fontSize:16 }}>{otherProps.title}</CText.LoginText>
                <CText.LogoutText style={{ color: "#9494A1",fontSize:12,paddingTop:5 }}>{otherProps.type} : <CText.LogoutText style={{ color: otherProps.amountColor,fontSize:12 }}>{otherProps.amount} </CText.LogoutText>  </CText.LogoutText>
            </View>

        </View>
        <View style={{alignItems:"flex-end"}}>
        <CText.LogoutText style={{ color: "#9494A1",fontSize:12 }}>{otherProps.tag} </CText.LogoutText>
        <CText.LogoutText style={{ color: "#9494A1",fontSize:12,paddingTop:5 }}>{otherProps.date} </CText.LogoutText>
        </View>

    </View>
))

export default {
    BalanceView,
    TotalIncomeView
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