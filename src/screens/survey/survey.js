import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Color } from '../../constants/color'

const Survey = ({navigation}) => {
  const toDetail = () => {
    navigation.navigate("SurveyDetail");
  }

  return (
    <View style={styles.container}>
      <Text>Survey</Text>
      <Pressable onPress={toDetail} style={styles.button}>
        <Text style={styles.buttonText}>To Detail</Text>
      </Pressable>
    </View>
  )
}

export default Survey

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