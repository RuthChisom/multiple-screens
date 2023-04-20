// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Home from './src/screens/Home';
import Profile from './src/screens/Profile';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottonTabs from './navigation/BottonTabs';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>{/* Rest of your app code */}
        {/* <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName="Profile"> */}
        {/* <Stack.Navigator>
          <Stack.Screen name='Welcome' component={Home}/>
          <Stack.Screen name='About' component={Profile}/>
        </Stack.Navigator> */}
        {/* seems like you cant use bottom tab together with arrow navigation */}
        <BottonTabs/>
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
