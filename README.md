# react navigation


npm install @react-navigation/native
import { NavigationContainer } from '@react-navigation/native';


npx expo install react-native-screens react-native-safe-area-context   
<!-- dependencies if using expo -->

npm install @react-navigation/native-stack
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
<NavigationContainer>
    <Stack.Navigator>
        <Stack.Screen name=' ' component={ }/>
        <Stack.Screen name=' ' component={ }/>
    </Stack.Navigator>
</NavigationContainer>


import { useNavigation } from '@react-navigation/native';
const navigation = useNavigation();

npm install @react-navigation/bottom-tabs
<!-- for menu below the app -->
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
