import { View, StyleSheet, Text, Pressable } from "react-native";
import { removeItem } from "../utils/storage";
import { Color } from "../constants/color";
import { useAuth } from "../provider/authProvider";

const List = ({ navigation }) => {
  const { setAuthenticate } = useAuth();

  const logout = async () => {
    await removeItem("token");
    setAuthenticate(false);
  };

  const toHome = () => {
    navigation.navigate("Tab");
  }

  return (
    <View style={styles.container}>
      <Text>Hello Home!</Text>
      <Pressable onPress={logout} style={styles.button}>
        <Text style={styles.buttonText}>Logout</Text>
      </Pressable>

      <Pressable onPress={toHome} style={styles.button}>
        <Text style={styles.buttonText}>To Home</Text>
      </Pressable>
    </View>
  );
};

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
});

export default List;
