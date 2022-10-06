import { StyleSheet } from 'react-native';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';

const gradientStyle = StyleSheet.create({
  gradientContainer: {
    ...StyleSheet.absoluteFillObject,
    height: '100%',
  },
});

export const BackgroundGradient = (): JSX.Element => {
  return (
    <LinearGradient
      colors={['#F9F7F1', '#E65C00']}
      locations={[0.1, 0.8]}
      style={gradientStyle.gradientContainer}
    />
  );
};
