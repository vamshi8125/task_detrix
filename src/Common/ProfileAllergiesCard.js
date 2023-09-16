import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import CView from './CView'
import CText from './CText'

const ProfileAllergiesCard = () => {
  return (
    <View style={{ width: 233, height: 370, backgroundColor: "#FFFFFF", borderRadius: 12,marginTop:10 }}>
      <CView.ProfileCardTitleView title={"Allergies"} icon={require("../Assets/images/AddIcon.png")} height={12} width={12} />
      <CView.ProfileCardAllergiesContentView title={"Drug"} subTitle={"No known allergies"} />
      <CView.ProfileCardAllergiesContentView title={"Food"} subTitle={"Lactose"} subTitle1={"Mild"} color1={"#FF832B"} secondLine={"Nuts"} secondLine1 = {"Severe"} color2={"#DA1E28"}/>
      <CView.ProfileCardAllergiesContentView title={"Environmental"} subTitle={"No known allergies"} />
      
    </View>
  )
}

export default ProfileAllergiesCard

const styles = StyleSheet.create({})