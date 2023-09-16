import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import CView from './CView'
import CText from './CText'

const ProfilePatientDetailsCard = () => {
  return (
    <View style={{ width: 233, height: 340, backgroundColor: "#FFFFFF", borderRadius: 12,marginTop:10 }}>
      <CView.ProfileCardTitleView title={"Personal Info"} icon={require("../Assets/images/edit.png")} height={20} width={20} />
      <CView.ProfileCardContentView title={"Date of Birth"} subTitle={"July 27th, 2001 (22y.o)"} icon={require("../Assets/images/calendar_icon.png")} height={28} width={30} />
      <CView.ProfileCardContentView title={"Phone Number"} subTitle={"2727-222-3333"} icon={require("../Assets/images/phone.png")} height={28} width={30} />
      <CView.ProfileCardContentView title={"Email"} subTitle={"Chandukiran@gmail.com"} icon={require("../Assets/images/message.png")} height={28} width={30} />
      <CView.ProfileCardContentView title={"Admission Id"} subTitle={"567892_AP_GH"} icon={require("../Assets/images/id_card.png")} height={28} width={30} />
      <CView.ProfileCardContentView title={"Address"} subTitle={"9040 Karelle Camp, Millertown"} icon={require("../Assets/images/gps.png")} height={28} width={30} />
    </View>
  )
}

export default ProfilePatientDetailsCard

const styles = StyleSheet.create({})