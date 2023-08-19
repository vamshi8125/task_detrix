import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ContainerView from '../Common/ContainerView'
import CHeader from '../Common/CHeader'
import CText from '../Common/CText'
import MockData from '../Common/MockData'
import CView from '../Common/CView'
import CFooter from '../Common/CFooter'

const TotalIncome = (props) => {

    let data = MockData.accountData.filter(function (el) {
        return el.tag == "Freelance"
    })
  return (
   <ContainerView>
        <CHeader navigation={props.navigation} showBack headingTitle={"Total Income"} />
        <View style={{alignItems:"center",marginTop:29}}>
            <CText.AmountText>{"₹ 45,000.14"}</CText.AmountText>
            <CText.LogoutText style={{color:"#6C6D81",fontSize:12}}>{"Upto 13th Feb 2023"}</CText.LogoutText>
        </View>
        <FlatList
                data={data}
                keyExtractor={item => item._id}
                renderItem={({ item }) => {
                    return(
                        <View style={{ marginHorizontal: 10, marginTop: 29 }}>
                        <CView.TotalIncomeView logo={item.logo} title={item.title} type={item.type} amountColor={item.type == "sent" ? "#FF3974" : "#1CACAB"} amount={item.amount} tag={`tag:${item.tag}`} date={item.date} />
                    </View>
                    )
                    
                }}
            />
             <View style={{marginBottom:40,width:"90%",alignSelf:"center"}}>
                <CFooter />
            </View>
   </ContainerView>
  )
}

export default TotalIncome

const styles = StyleSheet.create({})