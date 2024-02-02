import { StyleSheet, View } from "react-native";
import React, { useEffect } from "react";
import { headerOptions } from "../../utils/navigatorOptions";
import { Color } from "../../constants/color";
import { boothSegment, boothData } from "../../constants/data";
import SearchBar from "../../components/searchBar";
import Segment from "../../components/segment";
import List from "../../components/list";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const configHeader = (params) => {
  const navigation = params.navigation;

  useEffect(() => {
    headerOptions(params);
  }, [navigation]);
};

const Booth = ({ navigation }) => {
  const navigateTo = "EventList";
  const profile = true;
  configHeader({navigation, navigateTo, profile});

  const icon = (
    <MaterialCommunityIcons
      name="curtains-closed"
      size={23}
      color={Color.white}
    />
  );

  const toDetail = (params) => {
    navigation.navigate("BoothDetail", params);
  };

  return (
    <View style={styles.background}>
      <View style={styles.container}>
        <SearchBar type={1} />
        <Segment segments={boothSegment} segmentType={1} />
        <List data={boothData} icon={icon} onPress={toDetail} />
      </View>
    </View>
  );
};

export default Booth;

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
