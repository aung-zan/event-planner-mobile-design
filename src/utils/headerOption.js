import { StyleSheet, Text, View, Pressable } from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import { removeItem } from "./storage";
import React from "react";

const Profile = ({logout}) => {
  return (
    <Pressable onPress={logout}>
      <FontAwesome name="user-circle" size={24} color="black" />
    </Pressable>
  );
};

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

const styles = StyleSheet.create({
  //
});
