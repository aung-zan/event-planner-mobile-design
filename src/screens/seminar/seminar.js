import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { headerOptions } from "../../utils/navigatorOptions";
import { Color } from "../../constants/color";
import { useAuth } from "../../provider/authProvider";
import SearchBar from "../../components/searchBar";
import DatePicker from "../../components/datePicker";
import List from "../../components/list";
import { seminarData } from "../../constants/data";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const configHeader = (params) => {
  const navigation = params.navigation;

  useEffect(() => {
    headerOptions(params);
  }, [navigation]);
};

const Seminar = ({ navigation }) => {
  const { setAuthenticate } = useAuth();
  const navigateTo = "EventList";

  configHeader({ navigation, navigateTo, setAuthenticate });

  const icon = (
    <MaterialCommunityIcons name="presentation" size={24} color={Color.white} />
  );

  const toDetail = (params) => {
    navigation.navigate("SeminarDetail", params);
  };

  return (
    <View style={styles.background}>
      <View style={styles.container}>
        <SearchBar type={1} />

        {/* datepicker date kind of wrong */}
        <DatePicker from="2024-01-01 08:00" to="2024-01-30 17:00" />

        <List data={seminarData} icon={icon} onPress={toDetail} />
      </View>
    </View>
  );
};

export default Seminar;

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
