import { HeaderBackButton } from "@react-navigation/elements";
import { removeItem } from "./storage";
import { Color } from "../constants/color";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import Profile from "../components/profile";
import LogoutButton from "../components/logoutButton";
import ScannerVisitor from "../components/scannerVisitor";

const logoutButton = (setAuthenticate) => {
  const logout = async () => {
    await removeItem("token");
    setAuthenticate(false);
  };

  return () => <LogoutButton onPress={logout} />;
}

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

const profileButton = (navigation) => {
  const profileAction = () => {
    navigation.toggleDrawer();
  }

  return () => <Profile onPress={profileAction} />;
};

const scannerVisitor = (navigation, scanVisitor, routeParams) => {
  return () => (
    <ScannerVisitor
      onPress={() => {
        navigation.navigate(scanVisitor, routeParams);
      }}
    />
  );
};

export const headerOptions = (params) => {
  let options = {};

  const navigation = params.navigation;
  // for logout button
  const setAuthenticate = params?.setAuthenticate;
  // for back button
  const navigateTo = params?.navigateTo;
  const style = params?.backButtonStyle;
  // for title
  const title = params?.title;
  // for drawer button
  const profile = params?.profile;
  const scanVisitor = params?.scanVisitor;
  const routeParams = params?.routeParams;

  if (setAuthenticate) {
    options.headerRight = logoutButton(setAuthenticate);
  }

  if (navigateTo) {
    options.headerLeft = backButton(navigation, navigateTo, style);
  }

  if (profile) {
    options.headerRight = profileButton(navigation);
  }

  if (scanVisitor) {
    options.headerRight = scannerVisitor(navigation, scanVisitor, routeParams);
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
    "SpotVisitor",
    "BoothScanner",
    "BoothVisitor",
    "SeminarScanner",
    "SeminarVisitor",
    "SurveyScanner",
    "SurveyVisitor",
  ];
  const routeName = getFocusedRouteNameFromRoute(route);

  return scannerRoutes.includes(routeName)
    ? { display: "none" }
    : { display: "flex" };
};
