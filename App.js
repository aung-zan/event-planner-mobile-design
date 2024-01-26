import { StatusBar } from "expo-status-bar";
import { AuthProvider } from "./src/provider/authProvider";
import AppInitializer from "./AppInitializer";

export default function App() {
  // const [fontsLoaded] = useFonts({
    // Georgia, Roboto-Regular
    // "SF": require("./assets/font/SF-Pro-Text-Regular.otf"),
    // "Roboto": require("./assets/font/Roboto-Regular.ttf"),
  // });

  // const onLayoutRootView = useCallback(async () => {
  //   if (fontsLoaded) {
  //     await SplashScreen.hideAsync();
  //   }
  // }, [fontsLoaded]);

  // if (!fontsLoaded) {
  //   return null;
  // }

  return (
    // <GestureHandlerRootView style={styles.container} onLayout={onLayoutRootView}>
    //   <AuthProvider>
    //     <Navigator />
    //   </AuthProvider>
    //   <StatusBar style="auto" />
    // </GestureHandlerRootView>
    <>
      <AuthProvider>
        {/* <FontLoader /> */}
        <AppInitializer />
      </AuthProvider>
      <StatusBar style="auto" />
    </>
  );
}
