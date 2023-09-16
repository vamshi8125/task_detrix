import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import CView from './CView'
import CText from './CText'

const ProfilePersonalHistoryCard = () => {
  return (
    <View style={{ width: 233, height: 280, backgroundColor: "#FFFFFF", borderRadius: 12,marginTop:10 }}>
      <CView.ProfileCardTitleView title={"Personal History"} icon={require("../Assets/images/edit.png")} height={20} width={20} />
      <CView.ProfileCardRadioButtonView title={"Tobacco"} actvieItem = {false} />
      <CView.ProfileCardRadioButtonView title={"Alcohol"} actvieItem = {true} />
      <CView.ProfileCardRadioButtonView title={"Others"} actvieItem = {false} />
    </View>
  )
}

export default ProfilePersonalHistoryCard

const styles = StyleSheet.create({})