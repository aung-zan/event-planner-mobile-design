import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { headerOptions } from "../../utils/navigatorOptions";
import { Color } from "../../constants/color";
import { surveyData } from "../../constants/data";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import SearchBar from "../../components/searchBar";
import List from "../../components/list";

const configHeader = (params) => {
  const navigation = params.navigation;

  useEffect(() => {
    headerOptions(params);
  }, [navigation]);
};

const Survey = ({ navigation }) => {
  const navigateTo = "EventList";
  const profile = true;

  configHeader({ navigation, navigateTo, profile });

  const icon = (
    <MaterialCommunityIcons name="chart-box" size={23} color={Color.white} />
  );

  const toDetail = (params) => {
    navigation.navigate("SurveyDetail", params);
  };

  return (
    <View style={styles.background}>
      <View style={styles.container}>
        <SearchBar type={1} />

        <List data={surveyData} icon={icon} onPress={toDetail} />
      </View>
    </View>
  );
};

export default Survey;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: Color.secondary,
  },
  container: {
    flex: 1,
    backgroundColor: Color.primary,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
});
