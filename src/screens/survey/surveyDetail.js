import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { headerOptions } from '../../utils/navigatorOptions';
import { Color } from '../../constants/color';
import { getSurveyById } from '../../helper/helper';

const configHeader = (params) => {
  const navigation = params.navigation;

  useEffect(() => {
    headerOptions(params);
  }, [navigation]);
};

const SurveyDetail = ({ route, navigation }) => {
  const navigateTo = "Survey";
  const title = route.params.name;
  const profile = true;

  configHeader({ navigation, navigateTo, title, profile });

  const itemId = route.params.itemId;
  const survey = getSurveyById(itemId);

  const toScanner = () => {
    navigation.navigate("SurveyScanner", route.params);
  }

  return (
    <View style={styles.background}>
      <View style={styles.container}>

      <View style={styles.titleContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.datetime}>{survey.from} ~ {survey.to}</Text>
          <Text style={styles.datetime}>{survey.status}</Text>
        </View>

        {/* change to graph */}
        <View style={styles.info}>
          <View style={styles.infoLeft}>
            <Text style={styles.infoText}>Maximum</Text>
          </View>
          <View style={styles.infoRight}>
            <Text style={styles.infoText}>100 person</Text>
          </View>
        </View>
        <View style={styles.info}>
          <View style={styles.infoLeft}>
            <Text style={styles.infoText}>Applicants</Text>
          </View>
          <View style={styles.infoRight}>
            <Text style={styles.infoText}>100 (0 person Left)</Text>
          </View>
        </View>
        <View style={styles.info}>
          <View style={styles.infoLeft}>
            <Text style={styles.infoText}>Accept</Text>
          </View>
          <View style={styles.infoRight}>
            <Text style={styles.infoText}>100 person</Text>
          </View>
        </View>

        <Pressable style={styles.button} onPress={toScanner}>
          <Text style={styles.text}>Reception</Text>
        </Pressable>

      </View>
    </View>
  )
}

export default SurveyDetail

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
    marginBottom: "20%",
  },
  title: {
    fontFamily: "SF",
    fontSize: 25,
    color: Color.black,
  },
  datetime: {
    fontFamily: "SF",
    fontSize: 18,
    color: Color.black,
    paddingTop: "2%",
  },
  info: {
    flexDirection: "row",
    marginHorizontal: "6%",
    alignItems: "center",
    height: "5%",
  },
  infoLeft: {
    width: "50%",
    alignItems: "flex-start",
  },
  infoRight: {
    width: "50%",
    alignItems: "flex-end",
  },
  infoText: {
    fontFamily: "SF",
    fontSize: 18,
    color: Color.black,
  },
  button: {
    marginTop: "15%",
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