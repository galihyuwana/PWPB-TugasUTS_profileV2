import { View, Text, Button, StatusBar, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';

export default function EditScreen({navigation}) {
  return (
    <View style={{flex: 1}}>
      <StatusBar barStyle={'light-content'} backgroundColor="#212121" />
      <View style={{flex: 1,}}>
        <View>
          <TouchableOpacity>
          {/* <Icon
            style={{
              paddingTop: 15,
              paddingLeft: 10,
            }}
            name="chevron-back"
            size={45}
            color="#212121"
            // onPress={() => navigation.goBack()}
          /> */}
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}