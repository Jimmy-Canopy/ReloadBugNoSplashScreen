import { preventAutoHideAsync, hideAsync } from 'expo-splash-screen';
import {loadAsync} from 'expo-font';
import { useEffect, useState } from 'react';
import {
  Overpass_700Bold,
  Overpass_400Regular,
  Overpass_800ExtraBold,
} from '@expo-google-fonts/overpass';
export default function useCachedResources() {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  // Load any resources or data that we need prior to rendering the app
  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        await preventAutoHideAsync();
        await loadAsync({
          'Overpass-Bold': Overpass_700Bold,
          'Overpass-Regular': Overpass_400Regular,
          'Overpass-ExtraBold': Overpass_800ExtraBold,
        });
        await hideAsync();
        setLoadingComplete(true);
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  return isLoadingComplete;
}
