import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import ContainerView from '../Common/ContainerView'
import CHeader from '../Common/CHeader'
import CView from '../Common/CView'
import MockData from '../Common/MockData'
import CImage from '../Common/CImage'
import CFooter from '../Common/CFooter'

const Home = (props) => {

    let data = MockData.accountData.slice(0, 10)
    return (
        <ContainerView>
            <CHeader firstText={"Good Morning"} showLogout navigation={props.navigation} />
            <View style={{ flexDirection: "row", justifyContent: "space-between", marginHorizontal: 10, marginTop: 29 }}>
                <TouchableOpacity onPress={() => props.navigation.navigate("TotalIncome")}>
                    <CView.BalanceView title={"Balance"} amount={"₹20,000.14"} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => props.navigation.navigate("TotalExpense")}>
                    <CView.BalanceView title={"Expense"} amount={"₹22,000.14"} />
                </TouchableOpacity>

            </View>
            <FlatList
                data={data}
                keyExtractor={item => item._id}
                renderItem={({ item }) => {
                    return (
                        <View style={{ marginHorizontal: 10, marginTop: 29 }}>
                            <CView.TotalIncomeView logo={item.logo} title={item.title} type={item.type} amountColor={item.type == "sent" ? "#FF3974" : "#1CACAB"} amount={item.amount} tag={`tag:${item.tag}`} date={item.date} />
                        </View>
                    )

                }}
            />
            <View style={{ flexDirection: "row", justifyContent: "space-between", width: "100%" }}>
                <TouchableOpacity onPress={() => props.navigation.navigate("AddIncome")} style={{ position: "absolute",alignItems:"center",justifyContent:"center", zIndex: 99, width: 88, height: 60, borderTopRightRadius: 100, borderBottomRightRadius: 100, backgroundColor: "#364160", bottom: 100 }}>
                    <CImage.ArrowDown />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => props.navigation.navigate("AddExpense")} style={{ position: "absolute",alignItems:"center",justifyContent:"center",  zIndex: 99, width: 88, height: 60, borderTopLeftRadius: 100, borderBottomLeftRadius: 100, backgroundColor: "#364160", bottom: 100, right: 0 }}>
                <CImage.ArrowUp />
                </TouchableOpacity>
            </View>

            <View style={{marginBottom:40,width:"90%",alignSelf:"center"}}>
                <CFooter />
            </View>


        </ContainerView>
    )
}

export default Home

const styles = StyleSheet.create({})