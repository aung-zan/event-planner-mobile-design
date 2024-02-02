import { DrawerContentScrollView } from '@react-navigation/drawer';
import CustomDrawerItem from './customDrawerItem';
import { useAuth } from '../provider/authProvider';
import { removeItem } from '../utils/storage';
import { StyleSheet, Text, View } from 'react-native';
import { Color } from '../constants/color';

const CustomDrawer = (props) => {
  const { setAuthenticate } = useAuth();
  const navigation = props.navigation;

  const toNoti = () => {
    navigation.navigate("Noti");
  }

  const toVisitor = () => {
    navigation.navigate("Visitor");
  }

  const logout = async () => {
    await removeItem("token");
    setAuthenticate(false);
  };

  return (
    // <DrawerContentScrollView>
    // </DrawerContentScrollView>
    <View>
      <View style={styles.header}></View>

      <CustomDrawerItem
        onPress={toNoti}
        text="Notification"
        icon="message-badge"
      />
      <CustomDrawerItem
        onPress={toVisitor}
        text="Visitor"
        icon="account-group"
      />
      <CustomDrawerItem
        onPress={logout}
        text="Logout"
        icon="logout"
      />
    </View>
  )
}

export default CustomDrawer

const styles = StyleSheet.create({
  header: {
    // borderWidth: 1,
    height: "28%",
    backgroundColor: Color.secondary,
  },
})