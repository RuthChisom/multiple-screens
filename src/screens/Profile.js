import { View, Text, Button } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Profile = () => {
    const navigation = useNavigation();
    return (
    <View>
      <Text>I am Ruth Chisom Obidike!!</Text>
      <Button title='back to home' onPress={()=>navigation.goBack()}/>{/*can be used instead of the default back button*/}
    </View>
  )
}

export default Profile