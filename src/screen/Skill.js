import {View, Text, ScrollView, Image} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import career from '../../image/semestacareer.jpg';

export default function Skill() {
  return (
    <ScrollView style={{flex: 1}}>
      {/* skill coding */}
      <View>
        {/* bahasa pemrograman */}
        <View
          style={{
            width: '100%',
          }}>
          <View>
            <Text>Skill Coding</Text>
          </View>
          {/* <View
          style={{
            flexDirection:'row',
            width: '100%',
            justifyContent:'space-between',
            paddingHorizontal: 50,
          }}
          > */}
          {/* HTML */}
          <View
            style={{
              marginBottom: 20,
            }}>
            <View
              style={{
                backgroundColor: '#ff6600',
                width: 120,
                height: 120,
                borderRadius: 10,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Icon name="logo-html5" size={100} color="#4d4d4d" />
            </View>
          </View>
          {/* CSS */}
          <View
            style={{
              marginBottom: 20,
            }}>
            <View
              style={{
                backgroundColor: '#1E90FF',
                width: 120,
                height: 120,
                borderRadius: 10,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Icon name="logo-css3" size={100} color="#4d4d4d" />
            </View>
          </View>
          {/* JAVASCRIPT */}
          <View
            style={{
              marginBottom: 20,
            }}>
            <View
              style={{
                backgroundColor: '#F0DB4F',
                width: 120,
                height: 120,
                borderRadius: 10,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Icon name="logo-javascript" size={90} color="#4d4d4d" />
            </View>
          </View>
          {/* TAILWIND */}
          <View
            style={{
              marginBottom: 20,
            }}>
            <View
              style={{
                backgroundColor: '#47B5FF',
                width: 120,
                height: 120,
                borderRadius: 10,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Icon2 name="tailwind" size={100} color="#4d4d4d" />
            </View>
          </View>
          {/* </View> */}
        </View>
        {/* bahasa pemrograman end */}

        {/* website start*/}
        <View>
          <View>
            <Text>uuu</Text>
          </View>
          <View
            style={{
              // flex:1,
              flexDirection: 'row',
            }}>
            {/* website 1 start */}
            <View
              style={{
                backgroundColor: '#ffffff',
                flex: 1,
                padding: 10,
                marginHorizontal:5,
                borderRadius: 10,
              }}>
              <Image
                source={career}
                style={{
                  alignSelf: 'center',
                  flex:1,
                  height: 110,
                  width: '100%',
                }}
              />
              <Text>
                Semesta Career
              </Text>
            </View>
            <View
              style={{
                backgroundColor: '#ffffff',
                flex: 1,
                padding: 10,
                marginHorizontal:5,
                borderRadius: 10,
              }}>
              <Image
                source={career}
                style={{
                  alignSelf: 'center',
                  height: 110,
                  width: '100%',
                }}
              />
            </View>
            {/* website 1 end */}
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
