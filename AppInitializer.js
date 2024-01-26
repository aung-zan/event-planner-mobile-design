import { useAuth } from './src/provider/authProvider'
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react'
import Navigator from './src/navigator/navigator';

const AppInitializer = () => {
  const { authCheck } = useAuth();
  const [fontLoaded] = useFonts({
    // Georgia, Roboto-Regular
    "SF": require("./assets/font/SF-Pro-Text-Regular.otf")
  });

  const loadApp = async () => {
    await SplashScreen.preventAutoHideAsync();

    if (authCheck && fontLoaded) {
      SplashScreen.hideAsync();
    }
  }

  useEffect(() => {
    loadApp();
  }, [fontLoaded, authCheck]);

  return authCheck && fontLoaded ? <Navigator /> : null;
}

export default AppInitializer