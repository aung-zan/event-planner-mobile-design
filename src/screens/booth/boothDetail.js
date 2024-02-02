import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { headerOptions } from '../../utils/navigatorOptions';
import { Color } from '../../constants/color';
import DatePicker from '../../components/datePicker';
import Graph from '../../components/graph';
import { boothChartData } from '../../constants/data';

const configHeader = (params) => {
  const navigation = params.navigation;

  useEffect(() => {
    headerOptions(params);
  }, [navigation]);
};

const BoothDetail = ({ route, navigation }) => {
  const navigateTo = "Booth";
  const title = route.params.name;
  const profile = true;
  configHeader({navigation, navigateTo, title, profile });

  const [data] = boothChartData;

  const onPress = () => {
    navigation.navigate("BoothScanner", route.params);
  }

  return (
    <View style={styles.background}>
      <View style={styles.container}>

        <View style={styles.titleContainer}>
          <Text style={styles.title}>{title}</Text>
        </View>

        <DatePicker from="2024-01-01 08:00" to="2024-01-30 17:00" />

        <Graph data={data} />

        <Pressable style={styles.button} onPress={onPress}>
          <Text style={styles.text}>Reception</Text>
        </Pressable>
      </View>
    </View>
  )
}

export default BoothDetail

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
  titleContainer: {
    marginTop: "15%",
    marginHorizontal: "5%",
    paddingHorizontal: "2%",
  },
  title: {
    fontFamily: "SF",
    fontSize: 25,
    color: Color.black,
  },
  button: {
    marginTop: "2%",
    marginHorizontal: "5%",
    alignItems: "center",
    justifyContent: "center",
    height: "9%",
    backgroundColor: Color.secondary,
    borderRadius: 15,
  },
  text: {
    fontFamily: "SF",
    fontSize: 20,
    color: Color.white,
  },
})