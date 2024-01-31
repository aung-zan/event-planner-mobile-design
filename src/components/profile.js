import { StyleSheet, Pressable, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { Color } from "../constants/color";
import React from "react";

const Profile = ({ logout }) => {
  return (
    <View style={styles.container}>
      <Pressable style={styles.test} onPress={logout}>
        <FontAwesome name="user-circle" size={24} color={Color.white} />
      </Pressable>
      <View style={styles.smallDot}></View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    // borderWidth: 1,
  },
  smallDot: {
    marginLeft: 10,
    marginRight: 5,
    borderWidth: 1,
    borderColor: Color.secondary,
  },
  test: {
    // borderWidth: 1,
  },
});
