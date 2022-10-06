import { View, ScrollView, TextInput, Pressable, Text } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { BackgroundGradient } from '../../../components/LinearGradient';
import { useTranslation } from 'react-i18next';

export interface CreateAccountState {
  firstName: string;
  lastName: string;
  phone: string;
  countryCode: string;
  email: string;
  password: string;
  confirmPassword: string;
  isPrivacyPolicyChecked: boolean;
  submitForm: boolean;
  validators: Record<string, string>;
  createError: string;
  createSuccess: string;
}

export const CreateAccount = (): JSX.Element => {
  const { navigate } = useNavigation();
  const { t } = useTranslation();

  return (
    <>
      <BackgroundGradient />
      <ScrollView testID="create-account">
        <View>
          <Text>{t('email')}</Text>

          <TextInput style={{ backgroundColor: 'white', borderRadius: 20 }} />
          <Text>{t('phone')}</Text>
          <TextInput style={{ backgroundColor: 'white', borderRadius: 20 }} />
        </View>
        <View>
          <Pressable
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'white',
              borderRadius: 20,
              margin: 10,
            }}
            onPress={() => {
              console.log('created account');
            }}
          >
            <Text>{t('createAccount')}</Text>
          </Pressable>
        </View>

        <View>
          <Pressable
            onPress={() => navigate('SignIn')}
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'white',
              borderRadius: 20,
              margin: 10,
            }}
          >
            <Text>Navigate To Sign In</Text>
          </Pressable>
        </View>
      </ScrollView>
    </>
  );
};
