/* eslint-disable prettier/prettier */
// App.js

import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View, ActivityIndicator} from 'react-native';
import auth from '@react-native-firebase/auth';

import LoginScreen from './src/screens/LoginScreen';
import SignupScreen from './src/screens/SignupScreen';
import HomeScreen from './src/screens/HomeScreen';
import ProfileCreationScreen from './src/screens/ProfileCreationScreen';
import VideoList from './src/screens/VideoList';
import imagePickerStructure from './src/screens/imagePickerStructure';
import Account from './src/screens/account';
import Camera from './src/screens/Camera/index'; 
import AddInformation from './src/screens/addInformation';
import Comments from './src/screens/comments'; 
import { doesUserProfileExist } from './src/services/firebase';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const AppTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Acceuil" component={HomeScreen} 
      />
      <Tab.Screen name="Decouvir" component={VideoList} />
      <Tab.Screen name="Creer" component={Camera} />
      <Tab.Screen name="Boite de reception" component={Account} />
      <Tab.Screen name="Compte" component={Account} />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="AppTabs" component={AppTabs} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
