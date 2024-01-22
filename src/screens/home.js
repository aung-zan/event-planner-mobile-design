import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { Color } from "../constants/color";
import { backButtonAction } from "../utils/headerOption";

const backButton = (navigateTo, navigation) => {
  useEffect(() => {
    backButtonAction(navigateTo, navigation, styles.backButton);
  }, [navigation]);
};

const Home = ({ navigation }) => {
  backButton("List", navigation);

  return (
    <View style={styles.container}>
      <Text>Hello</Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
    borderColor: "blue",
    backgroundColor: Color.primary,
  },
  backButton: {
    marginLeft: "10%",
  }
});
