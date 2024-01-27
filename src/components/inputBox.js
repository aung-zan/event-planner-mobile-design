import { StyleSheet, View, TextInput, Text } from "react-native";
import { Color } from "../constants/color";

const Email = ({ text, onChange }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Email</Text>
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
  // TODO: add password eye on/off fn
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Password</Text>
      <TextInput
        style={styles.password}
        placeholder="password"
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
  container: {
    marginHorizontal: "10%",
    marginBottom: "10%",
  },
  email: {
    marginTop: "2%",
    height: 30,
    borderBottomWidth: 1,
    borderBottomColor: Color.secondary,
    fontFamily: "SF",
  },
  password: {
    marginTop: "2%",
    height: 30,
    borderBottomWidth: 1,
    borderBottomColor: Color.secondary,
    fontFamily: "SF",
  },
  text: {
    fontFamily: "SF",
    fontSize: 18,
  },
});
