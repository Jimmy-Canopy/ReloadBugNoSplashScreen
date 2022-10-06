import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { CreateAccount } from '../screens/UserSignedOut/CreateAccount';
import { GetStarted } from '../screens/UserSignedOut/GetStarted';
import { RootStackParamList } from './types';
import { SignInScreen } from '../screens/UserSignedOut/SignInScreen';

export default function Navigation() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator
      initialRouteName={'GetStarted'}
      screenOptions={{
        presentation: 'fullScreenModal',
        orientation: 'portrait',
      }}
    >
      <Stack.Screen name="GetStarted" component={GetStarted} />
      <Stack.Screen name="CreateAccount" component={CreateAccount} />
      <Stack.Screen name="SignIn" component={SignInScreen} />
    </Stack.Navigator>
  );
}
