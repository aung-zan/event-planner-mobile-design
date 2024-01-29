import { StyleSheet, Pressable, View } from "react-native";
import { HeaderBackButton } from "@react-navigation/elements";
import { FontAwesome } from "@expo/vector-icons";
import { removeItem } from "./storage";
import { Color } from "../constants/color";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";

// For Profile Button on headerRight
const Profile = ({ logout }) => {
  return (
    <>
      <Pressable onPress={logout}>
        <FontAwesome name="user-circle" size={24} color={Color.white} />
      </Pressable>
      <View style={{marginLeft: 10, marginRight: 5, borderWidth: 1, borderColor: "white"}}></View>
    </>
  );
};

// headerRight Actions
export const headerRightAction = (setAuthenticate, navigation) => {
  const logout = async () => {
    await removeItem("token");
    setAuthenticate(false);
  };

  navigation.setOptions({
    headerRight: () => {
      return <Profile logout={logout} />;
    },
  });
};

// headerLeft Action
export const backButtonAction = (navigateTo, navigation, style) => {
  navigation.setOptions({
    headerLeft: () => {
      return (
        <HeaderBackButton
          labelVisible={false}
          onPress={() => {
            navigation.navigate(navigateTo);
          }}
          tintColor={Color.white}
          style={style}
        />
      );
    },
  });
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

  return scannerRoutes.includes(routeName) ? { display: "none" } : { display: "flex" };
};

const styles = StyleSheet.create({
});
