import React, { useLayoutEffect, useState } from "react";
import { View, Pressable, Text, StyleSheet } from "react-native";
import { Color } from "../constants/color";
import { tabIcons } from "../constants/icon";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const ActiveTab = ({ icon, iconSize, label }) => {
  return (
    <>
      <View style={styles.isActive}>
        <MaterialCommunityIcons
          name={icon}
          size={iconSize}
          color={Color.secondary}
        />
      </View>
      <Text style={styles.text}>{label}</Text>
    </>
  );
};

const NormalTab = ({ icon, iconSize }) => {
  return (
    <MaterialCommunityIcons name={icon} size={iconSize} color={Color.white} />
  );
};

export default function TabBar({ state, descriptors, navigation }) {
  const tabHideRoute = ["Spots", "Booths"];
  const [hideTab, setHideTab] = useState(false);

  /**
   * this useLayoutEffect is used for to hide
   * tab bar in scanner screen.
   */
  useLayoutEffect(() => {
    const routes = state.routes;
    const focusedRouteKey = routes[state.index].key;
    const focusedRouteName = state.routeNames[state.index];
    const { options } = tabHideRoute.includes(focusedRouteName)
      ? descriptors[focusedRouteKey]
      : [];
    options?.tabBarStyle?.display == "none"
      ? setHideTab(true)
      : setHideTab(false);
  }, [state, descriptors]);

  return (
    <View style={hideTab ? styles.hideContainer : styles.container}>
      {state.routes.map((route, index) => {
        const label = route.name;
        const icon = tabIcons[label];
        const iconSize = label == "Visitor" ? 22 : 24;
        const isFocused = state.index === index;

        const onPress = () => {
          navigation.navigate(route.name, route.params);
        };

        return (
          <Pressable onPress={onPress} style={styles.button} key={route.key}>
            {isFocused ? (
              <ActiveTab icon={icon} iconSize={iconSize} label={label} />
            ) : (
              <NormalTab icon={icon} iconSize={iconSize} />
            )}
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  hideContainer: {
    display: "none",
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    height: 100,
    width: "90%",
    marginLeft: "5%",
    borderRadius: 15,
    position: "absolute",
    bottom: 25,
    backgroundColor: Color.secondary,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    height: "70%",
    width: "20%",
  },
  isActive: {
    alignItems: "center",
    justifyContent: "center",
    height: "75%",
    width: "75%",
    marginBottom: "5%",
    borderRadius: 50,
    backgroundColor: Color.white,
  },
  text: {
    fontFamily: "SF",
    color: Color.white,
    fontSize: 16,
  },
});
