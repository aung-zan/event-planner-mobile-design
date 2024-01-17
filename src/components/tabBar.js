import React from "react";
import { View, Pressable, Text, StyleSheet } from "react-native";
import { Color } from "../constants/color";
import { Icon } from "../constants/icon";
import {
  FontAwesome,
  FontAwesome5,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

function ActiveTab({ icon, iconSize, label }) {
  let activeTabs;

  switch (label) {
    case "Surveys":
      activeTabs = (
        <View style={styles.isActive}>
          <FontAwesome5 name={icon} size={iconSize} color={Color.pending} />
          <Text style={styles.text}>{label}</Text>
        </View>
      );
      break;
    case "Booths":
    case "Seminars":
      activeTabs = (
        <View style={styles.isActive}>
          <MaterialCommunityIcons
            name={icon}
            size={iconSize}
            color={Color.pending}
          />
          <Text style={styles.text}>{label}</Text>
        </View>
      );
      break;
    default:
      activeTabs = (
        <View style={styles.isActive}>
          <FontAwesome name={icon} size={iconSize} color={Color.pending} />
          <Text style={styles.text}>{label}</Text>
        </View>
      );
      break;
  }

  return <>{activeTabs}</>;
}

function NormalTab({ icon, iconSize, label }) {
  let tabs;

  switch (label) {
    case "Surveys":
      tabs = (
        <>
          <FontAwesome5 name={icon} size={iconSize} color={Color.white} />
        </>
      );

      break;
    case "Booths":
    case "Seminars":
      tabs = (
        <>
          <MaterialCommunityIcons
            name={icon}
            size={iconSize}
            color={Color.white}
          />
        </>
      );

      break;

    default:
      tabs = (
        <>
          <FontAwesome name={icon} size={iconSize} color={Color.white} />
        </>
      );
      break;
  }

  return <>{tabs}</>;
}

export default function TabBar({ state, navigation }) {
  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const label = route.name;
        const icon = Icon[label];
        const iconSize = label == "Visitor" ? 22 : 24;
        const isFocused = state.index === index;

        const onPress = () => {
          if (route.name !== "Scanner") {
            navigation.navigate(route.name, route.params);
          }
        };

        return (
          <Pressable onPress={onPress} style={styles.button} key={route.key}>
            {isFocused ? (
              <ActiveTab icon={icon} iconSize={iconSize} label={label} />
            ) : (
              <NormalTab icon={icon} iconSize={iconSize} label={label} />
            )}
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
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
    backgroundColor: Color.pending,
    // marginBottom: "10%",
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
    height: "95%",
    width: "95%",
    borderRadius: 50,
    backgroundColor: Color.white,
  },
  text: {
    color: Color.black,
  },
});
