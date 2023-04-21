import { View, Text } from 'react-native'
import React from 'react'

const Users = ({names}) => {
  return (
    <View style={{margin: 50}}>
      <Text> Name: {names}</Text>
    </View>
  )
}

export default Users