import { HeaderBackButton } from "@react-navigation/elements";
import { removeItem } from "./storage";
import { Color } from "../constants/color";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import Profile from "../components/profile";
import ScannerVisitor from "../components/scannerVisitor";

const backButton = (navigation, navigateTo, style) => {
  return () => (
    <HeaderBackButton
      labelVisible={false}
      onPress={() => {
        navigation.navigate(navigateTo);
      }}
      tintColor={Color.white}
      style={style}
    />
  );
};

const profileButton = (setAuthenticate) => {
  const logout = async () => {
    await removeItem("token");
    setAuthenticate(false);
  };

  return () => <Profile logout={logout} />;
};

const scannerVisitor = (navigation, scanVisitor) => {
  return () => (
    <ScannerVisitor
      onPress={() => {
        navigation.navigate(scanVisitor);
      }}
    />
  );
};

export const headerOptions = (params) => {
  let options = {};
  const navigation = params.navigation;
  const style = params?.backButtonStyle;
  const navigateTo = params?.navigateTo;
  const setAuthenticate = params?.setAuthenticate;
  const title = params?.title;
  const scanVisitor = params?.scanVisitor;

  if (navigateTo) {
    options.headerLeft = backButton(navigation, navigateTo, style);
  }

  if (setAuthenticate) {
    options.headerRight = profileButton(setAuthenticate);
  }

  if (scanVisitor) {
    options.headerRight = scannerVisitor(navigation, scanVisitor);
  }

  if (title) {
    options.title = title;
  }

  navigation.setOptions(options);
};

// headerOptions for bottom tab navigator
export const tabBarOptions = () => {
  return {
    headerTitleStyle: { fontFamily: "SF", color: Color.white },
    headerShadowVisible: false,
    headerStyle: { backgroundColor: Color.secondary },
  };
};

// hide and show bottom tab
export const hideOrShowTab = (route) => {
  const scannerRoutes = [
    "SpotScanner",
    "BoothScanner",
    "SeminarScanner",
    "SurveyScanner",
  ];
  const routeName = getFocusedRouteNameFromRoute(route);

  return scannerRoutes.includes(routeName)
    ? { display: "none" }
    : { display: "flex" };
};
