import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { headerOptions } from "../../utils/navigatorOptions";
import { Color } from "../../constants/color";
import SearchBar from "../../components/searchBar";
import List from "../../components/list";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { visitorData } from "../../constants/data";

const headerConfig = (params) => {
  const navigation = params.navigation;

  useEffect(() => {
    headerOptions(params);
  }, [navigation]);
};

const SpotVisitor = ({ route, navigation }) => {
  const close = "Spot";
  const title = route.params.name;

  headerConfig({ navigation, close, title });

  const icon = (
    <MaterialCommunityIcons
      name="account-group"
      size={23}
      color={Color.white}
    />
  );

  return (
    <View style={styles.background}>
      <View style={styles.container}>
        <SearchBar type={1} />
        <List data={visitorData} icon={icon} />
      </View>
    </View>
  );
};

export default SpotVisitor;

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
