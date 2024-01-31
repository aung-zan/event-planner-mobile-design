import { StyleSheet, Pressable, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Color } from "../constants/color";
import React from "react";

const ScannerVisitor = ({ onPress }) => {
  return (
    <View style={styles.container}>
      <Pressable onPress={onPress}>
        <MaterialCommunityIcons
          name="account-group"
          size={24}
          color={Color.white}
        />
      </Pressable>
      <View style={styles.smallDot}></View>
    </View>
  );
};

export default ScannerVisitor;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  smallDot: {
    marginLeft: 10,
    marginRight: 5,
    borderWidth: 1,
    borderColor: Color.secondary,
  },
});
