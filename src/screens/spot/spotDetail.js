import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { backButtonAction } from "../../helper/helper";

const backButton = (navigateTo, navigation) => {
  useEffect(() => {
    backButtonAction(navigateTo, navigation);
  }, [navigation]);
};

const SpotDetail = ({ navigation }) => {
  backButton("Spot", navigation);

  return (
    <View>
      <Text>SpotDetail</Text>
    </View>
  );
};

export default SpotDetail;

const styles = StyleSheet.create({});
