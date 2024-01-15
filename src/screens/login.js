import { useState } from "react";
import { useAuth } from "../provider/authProvider";
import { Pressable, StyleSheet, Text, View } from "react-native";
import InputBox from "../components/inputBox";
import { Color } from "../constants/Color";
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
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
    fontFamily: "Georgia",
    fontSize: 65,
    color: Color.white,
  },
  body: {
    flex: 4,
    backgroundColor: Color.primary,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderWidth: 1,
    borderColor: Color.primary,
    marginTop: "-3%",
  },
  title: {
    marginTop: "10%",
    textAlign: "center",
    fontFamily: "Georgia",
    fontSize: 25,
  },
  loginForm: {
    marginTop: "18%",
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

export default Login;
