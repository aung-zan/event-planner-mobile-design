import { StyleSheet, Text, View, Pressable } from "react-native";
import { HeaderBackButton } from "@react-navigation/elements";
import { FontAwesome } from '@expo/vector-icons';
import { removeItem } from "./storage";
import { Color } from "../constants/color";

const Profile = ({logout}) => {
  return (
    <Pressable onPress={logout}>
      <FontAwesome name="user-circle" size={24} color={Color.white} />
    </Pressable>
  );
};

export const headerRightAction = (setAuthenticate, navigation) => {
  const logout = async () => {
    await removeItem("token");
    setAuthenticate(false);
  };

  navigation.setOptions({
    headerRight: () => {
      return <Profile logout={logout} />;
    },
  });
};

export const backButtonAction = (navigateTo, navigation, style) => {
  navigation.setOptions({
    headerLeft: () => {
      return (
        <HeaderBackButton
          labelVisible={false}
          onPress={() => {
            navigation.navigate(navigateTo);
          }}
          tintColor={Color.white}
          style={style}
        />
      );
    },
  });
};

const styles = StyleSheet.create({
  //
});
