import { StyleSheet, View, TextInput } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { Color } from "../constants/color";

const Email = ({ text, onChange }) => {
  return (
    <View style={styles.inputContainer}>
      <FontAwesome name="envelope" size={24} color="black" />
      <TextInput
        style={styles.email}
        placeholder="Email address"
        placeholderTextColor={Color.black}
        autoCapitalize="none"
        keyboardType="email-address"
        value={text}
        onChangeText={() => onChange()}
        keyboardAppearance="dark"
      />
    </View>
  );
};

const Password = ({ text, onChange }) => {
  return (
    <View style={[styles.inputContainer]}>
      <FontAwesome name="lock" size={24} color="black" />
      <TextInput
        style={styles.password}
        placeholder="Password"
        placeholderTextColor={Color.black}
        secureTextEntry={true}
        value={text}
        onChangeText={() => onChange()}
        keyboardAppearance="dark"
      />
    </View>
  );
};

export default function InputBox({ type, text, onChange }) {
  return type == "email" ? (
    <Email text={text} onChange={onChange} />
  ) : (
    <Password text={text} onChange={onChange} />
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    marginTop: "2%",
  },
  email: {
    borderBottomWidth: 1,
    height: 40,
    width: "70%",
    padding: 5,
    marginLeft: "1%",
    color: Color.black,
    fontFamily: "SF",
  },
  password: {
    borderBottomWidth: 1,
    height: 40,
    width: "70%",
    padding: 9,
    marginLeft: "2%",
    color: Color.black,
    fontFamily: "SF",
  },
});
