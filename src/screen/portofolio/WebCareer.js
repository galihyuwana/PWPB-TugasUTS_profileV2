import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

export default function WebCareer({navigation}) {
  return (
    <ScrollView style={{flex: 1}}>
      <View>
        {/* Header */}
        <View
          style={{
            flexDirection:'row',
            backgroundColor: '#ffffff',
            height: 60,
            alignItems: 'center',
            paddingHorizontal: 20,
          }}>
          <Icon
            name="arrow-back"
            size={30}
            style={{
              color: '#000000',
            }}
            onPress={() => navigation.goBack()}
          />
          <Text
          style={{
            marginLeft: 15,
            fontSize: 20,
            fontWeight:'500',
            color:'#000000'
          }}
          >Detail</Text>
        </View>
        {/* Content */}
        <View>
          
        </View>
      </View>
    </ScrollView>
  );
}
