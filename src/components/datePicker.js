import { Pressable, StyleSheet, Text, View } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons';
import React from 'react'

const DatePicker = () => {
  return (
    <View style={styles.container}>
      <View style={styles.datePicker}>
        <Pressable style={styles.dateButton}>
          <FontAwesome5 name="calendar" size={24} color="black" />
          <Text style={styles.dateText}>2024/01/01</Text>
        </Pressable>
      </View>

      <View style={styles.dateChanger}>
        <Pressable style={styles.dateChangeButton}>
          <FontAwesome5 name="chevron-left" size={24} color="black" />
        </Pressable>
        <Pressable style={styles.dateChangeButton}>
          <FontAwesome5 name="chevron-right" size={24} color="black" />
        </Pressable>
      </View>
    </View>
  )
}

export default DatePicker

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginTop: "5%",
    marginHorizontal: "5%",
    paddingHorizontal: "2%",
  },
  datePicker: {
    width: "62%",
  },
  dateChanger: {
    flexDirection: "row",
    width: "40%",
  },
  dateButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  dateChangeButton: {
    width: "50%",
    alignItems: "center",
  },
  dateText: {
    fontFamily: "SF",
    fontSize: 18,
    paddingLeft: "3%",
  },
})