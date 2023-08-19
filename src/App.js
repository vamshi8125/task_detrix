import { View, Text, Image } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from './Components/SplashScreen';
import Home from './Components/Home';
import TotalIncome from './Components/TotalIncome';
import TotalExpense from './Components/TotalExpense';
import AddIncome from './Components/AddIncome';
import AddExpense from './Components/AddExpense';
import Profile from './Components/Profile';

const Stack = createNativeStackNavigator();


const App = () => {
    
   
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='SplashScreen'>
                <Stack.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false }} />
                <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
                <Stack.Screen name="TotalIncome" component={TotalIncome} options={{ headerShown: false }} />
                <Stack.Screen name="TotalExpense" component={TotalExpense} options={{ headerShown: false }} />
                <Stack.Screen name="AddIncome" component={AddIncome} options={{ headerShown: false }} />
                <Stack.Screen name="AddExpense" component={AddExpense} options={{ headerShown: false }} />
                <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App