import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const Home = () => {
    const navigation = useNavigation();
    // const goToProfile = () => {
    //     console.log('navigate');
    //     navigation.navigate('About');
    // }

  return (
    <View style={{margin: 10, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Hurray! I now have more than one screens (pages)!!</Text>
      <TouchableOpacity 
        onPress={() => {
            console.log('navigate');
            navigation.navigate('About');
        }}
        // onPress={goToProfile}
        style={{margin:20, backgroundColor: 'red', padding:10}}>
            <Text>About Me</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Home