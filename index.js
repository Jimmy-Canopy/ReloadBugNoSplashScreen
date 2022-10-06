import { registerRootComponent } from 'expo';
import { Platform } from 'react-native';
// eslint-disable-next-line import/no-unresolved
import App from './App';
import './i18n';

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(App);
