import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import CView from './CView'
import CText from './CText'

const ProfileVitalsCard = () => {
  return (
    <View style={{ width: 233, height: 340, backgroundColor: "#FFFFFF", borderRadius: 12 }}>
      <CView.ProfileCardTitleView title={"Vitals"} icon={require("../Assets/images/AddIcon.png")} height={12} width={12} />
      <CView.ProfileCardContentView title={"Blood Group"} bgColor={"#DEEDFF"} subTitle={"B+ ve"} icon={require("../Assets/images/blood_group.png")} height={38} width={55} />
      <CView.ProfileCardContentView title={"Heart Rate"} bgColor={"#FFE7E1"} subTitle={"110 bpm"} icon={require("../Assets/images/heart_rate.png")} height={38} width={55} />
      <CView.ProfileCardContentView title={"Weight"} bgColor={"#FFE7E1"} subTitle={"90 kgs"} icon={require("../Assets/images/weight_mechine.png")} height={38} width={55} />
      <TouchableOpacity>
        <CText.ProfileContentText style={{ color: "#4589FF", textDecorationLine: "underline", alignSelf: "center", paddingTop: 10 }}>{"View History"}</CText.ProfileContentText>
      </TouchableOpacity>
    </View>
  )
}

export default ProfileVitalsCard

const styles = StyleSheet.create({})