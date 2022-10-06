// eslint-disable-next-line import/no-extraneous-dependencies
import { ExpoConfig, ConfigContext } from '@expo/config';

export default ({ config }: ConfigContext): ExpoConfig => {
  return {
    ...config,
    name: 'Canopy',
    slug: 'puffin',
    owner: 'canopy',
    version: '1.0.1',
    orientation: 'portrait',
    icon: './assets/icon.png',
    userInterfaceStyle: 'automatic',
    assetBundlePatterns: ['**/*'],
    ios: {
      bundleIdentifier: 'com.canopy.puffin',
      infoPlist: {
        'UISupportedInterfaceOrientations~iphone': [
          'UIInterfaceOrientationPortrait',
          'UIInterfaceOrientationLandscapeLeft',
        ],
      },
    },
    android: {
      adaptiveIcon: {
        foregroundImage: './assets/icon.png',
        backgroundColor: '#FFFFFF',
      },
      package: 'com.canopy.puffin',
    },
    runtimeVersion: '1.0.0',
    plugins: [
      [
        'expo-screen-orientation',
        {
          initialOrientation: 'ALL',
        },
      ],
    ],
  };
};
