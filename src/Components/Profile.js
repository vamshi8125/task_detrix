import { Dimensions, FlatList, Image, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import ProfileHeaderCard from '../Common/ProfileHeaderCard'
import ProfileVitalsCard from '../Common/ProfileVitalsCard'
import ProfilePatientDetailsCard from '../Common/ProfilePatientDetailsCard'
import ProfileAllergiesCard from '../Common/ProfileAllergiesCard'
import ProfilePersonalHistoryCard from '../Common/ProfilePersonalHistoryCard'
import CText from '../Common/CText'
import CView from '../Common/CView'
import CardContaineView from '../Common/CardContaineView'
import CImage from '../Common/CImage'

const Profile = () => {

  const symptomsData = [{
    id: 1,
    symptom: "Fever",
    icon:require("../Assets/images/smile_blue.png")
  }, {
    id: 2,
    symptom: "Cough",
    icon:require("../Assets/images/smile_green.png")
  }, {
    id: 3,
    symptom: "Vomiting",
    icon:require("../Assets/images/smile_green.png")
  }, {
    id: 4,
    symptom: "Irritation at Neck area",
    icon:require("../Assets/images/smile_yellow.png")
  }]
  const labReportsData = [{
    id: 1,
    symptom: "Thyroid Report",
    icon:require("../Assets/images/reports.png"),
    result:"Normal",
    color:"#42BE65"
  }, {
    id: 2,
    symptom: "Complete Blood Report",
    icon:require("../Assets/images/reports.png"),
    result:"Normal",
    color:"#42BE65"
  }, {
    id: 3,
    symptom: "Malaria Report",
    icon:require("../Assets/images/reports.png"),
    result:"Need Attention",
    color:"#FA4D56"
  }, ]

  const visitHistoryData = [{
    id:1,
    date:"12-09-2023",
    doctor:"Dr. Norma Torp",
    perpose:"Chest pain",
  },{
    id:2,
    date:"11-09-2023",
    doctor:"Dr. Samantha Smit",
    perpose:"Follow up",
  },{
    id:1,
    date:"13-09-2023",
    doctor:"Dr. Samantha Smit",
  }]
  return (
    <View style={{ flex: 1, backgroundColor: "#E0E0E0" }}>
      <ScrollView>
        <View style={{ margin: 20 }}>
          <ProfileHeaderCard />
          <View style={{ flexDirection: "row" }}>
            <View style={{ marginVertical: 20 }}>
              <ProfileVitalsCard />
              <ProfilePatientDetailsCard />
              <ProfileAllergiesCard />
              <ProfilePersonalHistoryCard />
            </View>
            <View style={{ margin: 20, width: Dimensions.get("screen").width - 305 }}>
              <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                <CText.Username>{"Records"}</CText.Username>
                <TouchableOpacity style={{ borderColor: "#1C79F3", borderWidth: 1 }}>
                  <CText.ProfileContentText style={{ color: "#1C79F3" }}>
                    {"+Add Records"}
                  </CText.ProfileContentText>
                </TouchableOpacity>
              </View>

              <CardContaineView >
                <CView.ProfileCardRightContentView title={"Chief Complaint / Visit Reason11"} />
                <CText.Username style={{ paddingTop: 10 }}>{"Patient have Fever since last 2 days and Have noticed cough with blood"}</CText.Username>
              </CardContaineView>
              <CardContaineView >
                <CView.ProfileCardRightContentView title={"Prescription"} icon={require("../Assets/images/AddIcon.png")} height={12} width={12} buttonName={"Add"} />
                <View style={{ flexDirection: "row", paddingTop: 20 }}>
                  <View style={{ alignItems: "center" }}>
                    <CImage.PrescriptionImage />
                    <CText.Username>{"15 Sep 2023"}</CText.Username>
                  </View>
                  <View style={{ alignItems: "center", marginLeft: 20 }}>
                    <CImage.PrescriptionImage />
                    <CText.Username>{"15 Sep 2023"}</CText.Username>
                  </View>
                </View>
              </CardContaineView>
              <CardContaineView >
                <CView.ProfileCardRightContentView title={"Files"} icon={require("../Assets/images/AddIcon.png")} height={12} width={12} buttonName={"Add"} />
                <View style={{ flexDirection: "row", paddingTop: 20 }}>
                  <View style={{ alignItems: "center" }}>
                    <CImage.FilesImage />
                    <CText.Username>{"Prescribed Rx"}</CText.Username>
                  </View>
                  <View style={{ alignItems: "center", marginLeft: 20 }}>
                    <CImage.FilesImage />
                    <CText.Username>{"Reports"}</CText.Username>
                  </View>
                  <View style={{ alignItems: "center", marginLeft: 20 }}>
                    <CImage.FilesImage />
                    <CText.Username>{"OtherReports"}</CText.Username>
                  </View>
                  <View style={{ alignItems: "center", marginLeft: 20 }}>
                    <CImage.FilesImage />
                    <CText.Username>{"Family Reports"}</CText.Username>
                  </View>
                </View>
              </CardContaineView>
              <CardContaineView >
                <CView.ProfileCardRightContentView title={"Symptoms"} icon={require("../Assets/images/edit.png")} height={12} width={12} buttonName={"Edit"} />
                <View style={{ flexDirection: "row", marginTop: 20, }}>
                {
                  symptomsData.map((item) => {
                    // console.warn(item)
                    return(
                     
                      <View style={styles.symptomsViewStyle}>
                        <CText.ProfileContentText>
                          {item?.symptom}
                        </CText.ProfileContentText>

                     
                    </View>
                    )
                     
                  })
                }
                 </View>


              </CardContaineView>
              <CardContaineView >
                <CView.ProfileCardRightContentView title={"Pain Level"} icon={require("../Assets/images/edit.png")} height={12} width={12} buttonName={"Edit"} />
                <View style={{ flexDirection: "row", marginTop: 20,flexWrap:"wrap" }}>
                {
                  symptomsData.map((item) => {
                    console.warn(item)
                    return(
                     
                      <View style={[styles.symptomsViewStyle,{flexDirection:"row",marginBottom:10}]}>
                        <CText.ProfileContentText>
                          {item?.symptom}
                        </CText.ProfileContentText>
                        <Image source={item.icon} style={{width:20,height:20,resizeMode:"contain",marginLeft:10}} />
                    </View>
                    )
                     
                  })
                }
                 </View>
              </CardContaineView>
              <CardContaineView >
                <CView.ProfileCardRightContentView title={"Past Medications"} icon={require("../Assets/images/AddIcon.png")} height={12} width={12} buttonName={"Add"} />
                <View style={{flexDirection:"row",flex:1,marginTop:15}}>
                <CView.ProfileCardAllergiesContentView width={200} title={"For Cough"} subTitle={"Mucinex DM 10mg"} />
                <CView.ProfileCardAllergiesContentView width={200} title={"For Fever"} subTitle={"Paracetamol 50mg"} />
                </View>
                
              </CardContaineView>
              <CardContaineView >
                <CView.ProfileCardRightContentView title={"Lab Report"} icon={require("../Assets/images/AddIcon.png")} height={12} width={12} buttonName={"Add"} />
                <View style={{ flexDirection: "row", marginTop: 20,flexWrap:"wrap" }}>
                {
                  labReportsData.map((item) => {
                    console.warn(item)
                    return(
                     
                      <View style={[styles.symptomsViewStyle,{flexDirection:"row",marginBottom:10}]}>
                         <Image source={item.icon} style={{width:50,height:80,resizeMode:"contain",marginLeft:10}} />
                         <View style={{}}>
                        <CText.ProfileContentText>
                          {item?.symptom}
                        </CText.ProfileContentText>
                        <CText.ProfileContentText style={{color:item?.color}}>
                          {item?.result}
                        </CText.ProfileContentText>
                        </View>
                    </View>
                    )
                     
                  })
                }
                 </View>
              </CardContaineView>
              <CardContaineView >
                <CView.ProfileCardRightContentView title={"View History"} icon={require("../Assets/images/AddIcon.png")} height={12} width={12} buttonName={"Add"} />
                <View>
                <View style={{flexDirection:"row",flex:1,justifyContent:"space-between",marginTop:10}}>
                          <CText.ProfileContentText style={{flex:1}}>
                            {"Date"}
                          </CText.ProfileContentText>
                          <CText.ProfileContentText style={{flex:2}}>
                            {"Doctor"}
                          </CText.ProfileContentText >
                          <CText.ProfileContentText style={{flex:1}}>
                            {"Purpose"}
                          </CText.ProfileContentText>
                          <CText.ProfileContentText style={{flex:1}}>
                            {"Actions"}
                          </CText.ProfileContentText>
                          </View>
                  <FlatList 
                    data={visitHistoryData}
                    keyExtractor={item => item.id}
                    renderItem={({item}) => {
                      return(
                        <>
                        <View style={{marginTop:10}}>
                        
                          <View style={{flexDirection:"row",flex:1,justifyContent:"space-between",paddingVertical:10}}>
                          <CText.ProfileContentText style={{flex:1}}>
                            {item?.date}
                          </CText.ProfileContentText >
                          <CText.ProfileContentText style={{flex:2}}>
                            {item?.doctor}
                          </CText.ProfileContentText>
                          <CText.ProfileContentText style={{flex:1}}>
                            {item?.perpose}
                          </CText.ProfileContentText>
                          <CText.ProfileContentText style={{flex:1}}>
                            {"Actions"}
                          </CText.ProfileContentText>
                          </View>
                          </View>
                          <View style={{ backgroundColor: "#E0E0E0", height: 1, width: "100%",marginTop:5 }} />
                          </>
                      )
                    }}
                  />
                </View>
              </CardContaineView>


            </View>
          </View>

        </View>
      </ScrollView>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
  symptomsViewStyle:{
    shadowOffset: { width: -2, height: 4 },
    shadowColor: '#171717',
    shadowOpacity: 0.2,
    shadowRadius: 3,
    backgroundColor: "white",
    paddingHorizontal: 20,
    paddingVertical: 10,
    width: "auto",
    borderRadius: 15,
    marginRight:10,
    alignItems: "center",
    justifyContent: "center"
  }
})