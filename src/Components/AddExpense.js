import { Button, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import ContainerView from '../Common/ContainerView'
import CHeader from '../Common/CHeader'
import CInput from '../Common/CInput'
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from 'moment'
import CText from '../Common/CText'
import CImage from '../Common/CImage'
import CButton from '../Common/CButton'
import CFooter from '../Common/CFooter'

const AddExpense = (props) => {
    const [incomeSource, setIncomeSource] = useState("")
    const [income, setIncome] = useState("")
    const [showDropDown, setShowDropDown] = useState(false)
    const [date, setDate] = useState("")
    const [selectedTag, setSelectedTag] = useState("")

    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (d) => {
        
        setDate(moment(d, "YYYY-MM-DDYYYY-MM-DDTHH:MM:SSZ").format("DD-MM-YYYY"))
        hideDatePicker();
    };

   const pickerTags = [{
    key:"NEFT",
    label:"Neft"
   },{
    key:"IMPS",
    label:"IMPS"
   },{
    key:"UPI",
    label:"UPI"
   }]
    return (
        <ContainerView>
            <CHeader showBack navigation={props.navigation} />
            <View style={{ marginHorizontal: 20, alignItems: "center" }}>
                <View>
                    <View style={{width:84,height:84,borderRadius:15,backgroundColor:"#2C3A61"}}/>
                    <CText.LabelText style={{marginTop:20}}>{"Add a Emoji"}</CText.LabelText>
                </View>
                <View style={{marginTop:20}}>
                <CInput
                    value={incomeSource}
                    onChangeText={(t) => setIncomeSource(t)}
                    label={"What is the expense ? "}
                />
                </View>
                <CInput
                    value={income}
                    onChangeText={(t) => setIncome(t)}
                    label={"How much it is ?"}
                />
                <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 29, width: "100%" }}>
                    <View>
                        <CText.LabelText style={{ paddingLeft: 10, paddingBottom: 10 }}>{"Date"}</CText.LabelText>
                        <TouchableOpacity onPress={showDatePicker} style={{ width: 153, height: 57, borderRadius: 15, backgroundColor: "#2B2D48", alignItems: "center", justifyContent: "flex-start", flexDirection: "row", paddingHorizontal: 10 }}>
                            <CImage.Calender />
                            <CText.AmountText style={{ fontSize: 16 }}>{date}</CText.AmountText>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <CText.LabelText style={{ paddingLeft: 10, paddingBottom: 10 }}>{"Tags"}</CText.LabelText>
                        <View>
                        <TouchableOpacity onPress={() => setShowDropDown(true)} style={{ width: 153, height: 57, borderRadius: 15, backgroundColor: "#2B2D48", alignItems: "center", justifyContent: "center" }}>
                            <CText.AmountText style={{ fontSize: 16 }}>{selectedTag}</CText.AmountText>
                        </TouchableOpacity>
                        {
                            showDropDown
                            && <View style={{position:"absolute",zIndex:99,width: 153, height: 117, borderRadius: 15,paddingLeft:10, backgroundColor: "#2B2D48", alignItems: "flex-start", justifyContent: "flex-start"}}>
                                    <FlatList
                                    data={pickerTags}
                                    keyExtractor={item => item.key}
                                    renderItem={({item}) => {
                                        return(
                                            <TouchableOpacity style={{paddingVertical:5}} onPress={() => {setSelectedTag(item.key)
                                            setShowDropDown(false)}}>
                                             <CText.AmountText style={{ fontSize: 16 }}>{item.key}</CText.AmountText>
                                        </TouchableOpacity>
                                        )
                                    }}
                                    />
                                          
                                </View>
                        }
                        </View>
                    </View>
                </View>
                <View style={{marginTop:40}}>
                    <CButton onPress={() => props.navigation.navigate("TotalExpense")} text={"Save"} />
                </View>
                <View style={{marginTop:40,width:"100%"}}>
                <CFooter />
                </View>
                
            </View>
            <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
            />
        </ContainerView>
    )
}

export default AddExpense

const styles = StyleSheet.create({})