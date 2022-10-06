import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  Pressable,
  TextInput,
} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import { BackgroundGradient } from '../../../components/LinearGradient';

export const SignInScreen = (): JSX.Element => {
  const { navigate } = useNavigation();

  const styles = createStyles();
  const { t } = useTranslation();

  return (
    <>
      <BackgroundGradient />
      <ScrollView contentContainerStyle={styles.screenContainer}>
        <View style={{ marginTop: '6%', marginBottom: '4%' }}>
          <Text>Sign In</Text>
        </View>
        <View style={styles.cardContainer}>
          <TextInput style={{ backgroundColor: 'white', borderRadius: 20 }} />
        </View>

        <View style={styles.signInLinkContainer}>
          <Text style={styles.headerText}>Not registered yet?&nbsp;&nbsp;</Text>
          <Text
            style={{
              ...styles.headerText,
              textDecorationLine: 'underline',
            }}
            onPress={() => navigate('CreateAccount')}
          >
            Create an account
          </Text>
        </View>

        <View style={styles.submitButtonContainer}>
          <Pressable
            accessibilityLabel={t('signIn')}
            testID="signInButton"
            //Demo - Offline Should call onSubmit
            onPress={() => console.log('signing in')}
          >
            <Text> {t('signIn')}</Text>
          </Pressable>
        </View>
      </ScrollView>
    </>
  );
};

const createStyles = () =>
  StyleSheet.create({
    screenContainer: {
      flexGrow: 1,
      alignItems: 'center',
      paddingBottom: '5%',
    },
    cardContainer: {
      width: '90%',
      marginBottom: '4%',
      paddingVertical: '3%',
      paddingHorizontal: '4%',
      backgroundColor: 'white',
      borderRadius: 20,
      borderColor: 'white',
    },
    submitButtonContainer: {
      position: 'absolute',
      bottom: '7%',
      width: '90%',
    },
    signInLinkContainer: {
      width: '70%',
      flexDirection: 'row',
      marginBottom: '3%',
      justifyContent: 'space-between',
    },
    headerText: {
      textAlign: 'left',
      fontSize: 16,
    },
    bodyText: {
      textAlign: 'left',
      fontSize: 12,
    },
    bodyTextLink: {
      fontSize: 12,
      textDecorationLine: 'underline',
    },
  });
