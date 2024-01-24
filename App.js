import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import Navigator from "./src/navigator/navigator";
import { AuthProvider } from "./src/provider/authProvider";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { useFonts } from "expo-font";
import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from "react";

export default function App() {
  const [fontsLoaded] = useFonts({
    // Georgia, Roboto-Regular
    "SF": require("./assets/font/SF-Pro-Text-Regular.otf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <GestureHandlerRootView style={styles.container} onLayout={onLayoutRootView}>
      <AuthProvider>
        <Navigator />
      </AuthProvider>
      <StatusBar style="auto" />
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
