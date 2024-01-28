import { useState } from "react";
import { useAuth } from "../provider/authProvider";
import { KeyboardAvoidingView, Platform, Pressable, StyleSheet, Text, View } from "react-native";
import InputBox from "../components/inputBox";
import { Color } from "../constants/color";
import { setItem } from "../utils/storage";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setAuthenticate } = useAuth();

  const login = async () => {
    await setItem("token", "aaa");
    setAuthenticate(true);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.mainContainer}
    >
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Q-Mobile</Text>
        </View>

        <View style={styles.body}>
          <Text style={styles.title}>Login</Text>

          <View style={styles.loginForm}>
            <InputBox type="email" text={email} onChange={setEmail} />
            <InputBox type="password" text={password} onChange={setPassword} />

            <Pressable onPress={login} style={styles.button}>
              <Text style={styles.buttonText}>Login</Text>
            </Pressable>
          </View>

          <View style={styles.version}>
            <Text style={styles.versionText}>version: 1</Text>
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  header: {
    flex: 2,
    backgroundColor: Color.secondary,
    alignItems: "center",
    justifyContent: "center",
  },
  headerText: {
    fontFamily: "SF",
    fontSize: 65,
    color: Color.white,
  },
  body: {
    flex: 4,
    backgroundColor: Color.primary,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderColor: Color.primary,
    marginTop: "-3%",
  },
  title: {
    marginTop: "10%",
    textAlign: "center",
    fontFamily: "SF",
    fontSize: 25,
  },
  loginForm: {
    marginTop: "18%",
  },
  version: {
    marginTop: "25%",
    marginHorizontal: "5%",
    alignItems: "flex-end",
  },
  button: {
    borderRadius: 10,
    marginTop: "5%",
    marginHorizontal: "21%",
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Color.secondary,
  },
  buttonText: {
    fontFamily: "SF",
    fontSize: 20,
    color: Color.white,
  },
  versionText: {
    fontFamily: "SF",
    fontSize: 18,
    color: Color.light,
  },
});

export default Login;
