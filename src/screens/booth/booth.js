import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { backButtonAction } from "../../utils/navigatorOptions";
import { Color } from "../../constants/color";
import { ErrorModal, SuccessModal } from "../../components/modal";

const backButton = (navigateTo, navigation) => {
  useEffect(() => {
    backButtonAction(navigateTo, navigation);
  }, [navigation]);
};

const Booth = ({ navigation }) => {
  backButton("List", navigation);

  const [showModal, setShowModal] = useState(false);

  const modalType = 2;

  const toDetail = () => {
    navigation.navigate("BoothDetail");
  };

  const modalHandler = () => {
    setShowModal(true);
  };

  return (
    <View style={styles.background}>
      <View style={styles.container}>
        <Text>Booth</Text>
        <Pressable onPress={modalHandler} style={styles.button}>
          <Text style={styles.buttonText}>Open Modal</Text>
        </Pressable>

        {
          modalType == 1
          ? <SuccessModal showModal={showModal} modalHandler={setShowModal} />
          : <ErrorModal showModal={showModal} modalHandler={setShowModal} />
        }
      </View>
    </View>
  );
};

export default Booth;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: Color.secondary,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Color.primary,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  button: {
    // borderWidth: 1,
    borderRadius: 10,
    marginTop: "7%",
    marginLeft: "21%",
    marginRight: "21%",
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Color.secondary,
    // borderColor: Color.pending,
  },
  buttonText: {
    fontFamily: "SF",
    fontSize: 20,
    color: Color.white,
  },
});
