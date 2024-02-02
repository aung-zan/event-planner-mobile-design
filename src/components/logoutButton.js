import { Pressable, StyleSheet, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Color } from '../constants/color';

const LogoutButton = ({ onPress }) => {
  return (
    <View style={styles.container}>
      <Pressable onPress={onPress}>
        <MaterialCommunityIcons name="logout" size={27} color={Color.white} />
      </Pressable>
      <View style={styles.smallDot}></View>
    </View>
  )
}

export default LogoutButton

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    // borderWidth: 1,
  },
  smallDot: {
    marginLeft: 1,
    // marginRight: 2,
    borderWidth: 1,
    borderColor: Color.secondary,
  },
})