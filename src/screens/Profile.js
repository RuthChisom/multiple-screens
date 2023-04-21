import { View, Text, Button, FlatList } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { names } from '../../externalData'
import Users from '../components/Users'

const Profile = () => {
    const navigation = useNavigation();
    return (
    <View>
      <Text>I am Ruth Chisom Obidike!!</Text>
      <View>
        <Text style={{fontSize:20}}>List and Keys</Text>
      </View>
      <View>
        <FlatList
        horizontal
        data={names}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({item}) => {
          console.log("names", item);
          return <Users names={item.name}/>;
        }}
        ListHeaderComponent={() => {
          return(
            <View style={{margin:10}}>
            <Text>List of User Names</Text>
            </View>
          );
        }}
        />

        {/* my vertical list isn't scrolling */}
        <FlatList
        vertical
        data={names}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({item}) => {
          console.log("names", item);
          return <Users names={item.name}/>;
        }}
        ListHeaderComponent={() => {
          return(
            <View >
            <Text>List of User Names</Text>
            </View>
          );
        }}
        />
      </View>

      <Button title='back to home' onPress={()=>navigation.goBack()}/>{/*can be used instead of the default back button*/}
    </View>
  )
}

export default Profile