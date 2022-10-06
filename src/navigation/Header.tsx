/* eslint-disable @typescript-eslint/no-explicit-any */
import { NativeStackNavigationOptions } from '@react-navigation/native-stack';
import React, { ReactNode } from 'react';
import { Pressable } from 'react-native';
import { XClose } from '../components/XClose';

export function HeaderRight({ navigation }: any): JSX.Element {
  const handlePress = (): void => {
    navigation.goBack();
  };
  return (
    <Pressable onPress={handlePress} accessibilityLabel="Close Modal">
      <XClose />
    </Pressable>
  );
}

export const getModalHeaderStyles = ({
  navigation,
}: any): NativeStackNavigationOptions => {
  return {
    headerLeft: (): ReactNode => null,
    headerBackVisible: false,
    headerTitle: '',
    headerShadowVisible: false,
    animation: 'slide_from_bottom',
    // eslint-disable-next-line react/display-name
    headerRight: (props): JSX.Element => (
      <HeaderRight navigation={navigation} {...props} />
    ),
  };
};
