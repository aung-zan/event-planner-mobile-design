import { View, Pressable, StyleSheet } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Color } from '../constants/color';

const CloseButton = ({ onPress }) => {
  return (
    <View style={styles.container}>
      <Pressable onPress={onPress}>
        <MaterialCommunityIcons name="close" size={24} color={Color.white} />
      </Pressable>
      <View style={styles.smallDot}></View>
    </View>
  )
}

export default CloseButton;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  smallDot: {
    marginLeft: 10,
    marginRight: 5,
    borderWidth: 1,
    borderColor: Color.secondary,
  },
});