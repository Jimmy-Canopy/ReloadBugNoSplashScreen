// import 'expo-dev-client';
import React, { useEffect } from 'react';
import Navigation from './src/navigation';
import { View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import * as ScreenOrientation from 'expo-screen-orientation';
import useCachedResources from './src/hooks/useCachedResources';

export default function App() {
  const isLoadingComplete = useCachedResources();

  useEffect(() => {
    async function prepare() {
      try {
        await ScreenOrientation.lockAsync(
          ScreenOrientation.OrientationLock.PORTRAIT_UP,
        );
      } catch (e) {
        console.error(e);
      }
    }

    prepare();
  }, []);

  //Render Splash screen until app is ready and fonts are loaded
  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <View style={{ flex: 1 }} testID="root-app-view">
        <Navigation />
        <StatusBar />
      </View>
    );
  }
}
