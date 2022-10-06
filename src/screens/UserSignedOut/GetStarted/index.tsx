import { StyleSheet, View, Dimensions, Pressable, Text } from 'react-native';
import React from 'react';
import { BackgroundGradient } from '../../../components/LinearGradient';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('screen');

const createStyles = () =>
  StyleSheet.create({
    buttonContainer: {
      position: 'absolute',
      top: '25%',
      width: '100%',
      paddingHorizontal: '5%',
    },
  });

export const GetStarted = (): JSX.Element => {
  const { navigate } = useNavigation();
  const styles = createStyles();

  return (
    <>
      <BackgroundGradient />

      <View style={styles.buttonContainer}>
        <Pressable
          onPress={() => {
            navigate('CreateAccount');
          }}
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'white',
          }}
        >
          <Text>Navigate To Create Account</Text>
        </Pressable>
      </View>
    </>
  );
};
