// In App.js in a new project

import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screen/Home';
import EditScreen from '../screen/EditScreen';
import Skill from '../screen/Skill';
import WebCareer from '../screen/portofolio/WebCareer';
import WebMabar from '../screen/portofolio/WebMabar';

const Stack = createNativeStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
        <Stack.Screen name="Skill" component={Skill} />
        <Stack.Screen name="Edit Profile" component={EditScreen} />
        <Stack.Screen name="Career" component={WebCareer} options={{headerShown: false}}/>
        <Stack.Screen name="Web Mabar" component={WebMabar} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
