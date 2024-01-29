import { Pressable, StyleSheet, Text, View } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons';
import { useState } from 'react'
import DateTimePickerModal from "react-native-modal-datetime-picker";

const DatePicker = () => {
  const [date, setDate] = useState();
  const [open, setOpen] = useState(false);

  const openPicker = () => {
    setOpen(true);
  }

  const closePicker = () => {
    setOpen(false);
  }

  const confirmPicker = (date) => {
    closePicker();
    const year = new Date(date).getFullYear();
    const month = (new Date(date).getMonth() + 1).toString().padStart(2, 0);
    const date = new Date(date).getDate();

    setDate(year + "/" + month + "/" + date);
  }

  return (
    <View style={styles.container}>
      <View style={styles.datePicker}>
        <Pressable style={styles.dateButton} onPress={openPicker}>
          <FontAwesome5 name="calendar" size={24} color="black" />
          <Text style={styles.dateText}>{date}</Text>
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

      <DateTimePickerModal
        isVisible={open}
        mode="date"
        onConfirm={confirmPicker}
        onCancel={closePicker}
        display="inline"
        maximumDate={new Date(2024, 0, 30)}
        minimumDate={new Date(2024, 0, 1)}
      />
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