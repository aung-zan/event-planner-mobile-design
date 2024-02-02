import { Pressable, StyleSheet, Text, View } from 'react-native'
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Color } from '../constants/color';

const CustomDrawerItem = ({ onPress, text, icon }) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <MaterialCommunityIcons
        name={icon}
        size={24}
        color={Color.black}
      />
      <View style={styles.title}>
        <Text style={styles.text}>{ text }</Text>
      </View>
    </Pressable>
  )
}

export default CustomDrawerItem

const styles = StyleSheet.create({
  container: {
    // borderWidth: 1,
    marginHorizontal: "5%",
    flexDirection: "row",
    alignItems: "center",
    marginTop: "5%",
  },
  title: {
    marginLeft: 20,
  },
  text: {
    fontFamily: "SF",
    fontSize: 18,
    color: Color.black,
  },
})