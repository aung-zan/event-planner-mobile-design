import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { backButtonAction } from '../../utils/navigatorOptions';
import { Color } from '../../constants/color'

const backButton = (navigateTo, navigation) => {
  useEffect(() => {
    backButtonAction(navigateTo, navigation);
  }, [navigation]);
};

const Seminar = ({navigation}) => {
  const toDetail = () => {
    navigation.navigate("SeminarDetail");
  }

  backButton("List", navigation);

  return (
    <View style={styles.container}>
      <Text>Seminar</Text>
      <Pressable onPress={toDetail} style={styles.button}>
        <Text style={styles.buttonText}>To Detail</Text>
      </Pressable>
    </View>
  )
}

export default Seminar

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    borderWidth: 1,
    borderRadius: 10,
    marginTop: "7%",
    marginLeft: "21%",
    marginRight: "21%",
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Color.pending,
    borderColor: Color.pending,
  },
  buttonText: {
    fontFamily: "Georgia",
    fontSize: 20,
    color: Color.white,
  },
})