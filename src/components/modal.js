import { StyleSheet, Text, View, Pressable } from "react-native";
import { Color } from "../constants/color";
import Modal from "react-native-modalbox";
import { FontAwesome5 } from "@expo/vector-icons";
import React from "react";

const successMessage =
  "Reception success.\nVisitor code: 100002\nVisitor name: Test";
const errorMessage =
  "Something went wrong.\nVisitor code: 100002\nVisitor name: Test";

export const SuccessModal = ({ showModal, modalHandler }) => {
  return (
    <Modal
      isOpen={showModal}
      position="center"
      style={styles.modal}
      swipeToClose={false}
      backdropPressToClose={false}
    >
      <View style={styles.modalHeader}>
        <FontAwesome5 name="check-circle" size={55} color={Color.success} />
      </View>

      <View style={styles.modalBody}>
        <View style={styles.title}>
          <Text style={styles.successTitleText}>Success</Text>
        </View>
        <View style={styles.info}>
          <Text style={styles.text}>{successMessage}</Text>
        </View>
      </View>

      <View style={styles.modalFooter}>
        <Pressable onPress={() => modalHandler(false)} style={styles.button}>
          <Text style={styles.buttonText}>Close</Text>
        </Pressable>
      </View>
    </Modal>
  );
};

export const ErrorModal = ({ showModal, modalHandler }) => {
  return (
    <Modal
      isOpen={showModal}
      position="center"
      style={styles.modal}
      swipeToClose={false}
      backdropPressToClose={false}
    >
      <View style={styles.modalHeader}>
        <FontAwesome5
          name="exclamation-circle"
          size={55}
          color={Color.danger}
        />
      </View>

      <View style={styles.modalBody}>
        <View style={styles.title}>
          <Text style={styles.errorTitleText}>Error</Text>
        </View>
        <View style={styles.info}>
          <Text style={styles.text}>{errorMessage}</Text>
        </View>
      </View>

      <View style={styles.modalFooter}>
        <Pressable onPress={() => modalHandler(false)} style={styles.button}>
          <Text style={styles.buttonText}>Close</Text>
        </Pressable>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    width: "80%",
    height: "60%",
    borderRadius: 15,
    backgroundColor: Color.primary,
  },
  modalHeader: {
    marginTop: "5%",
    alignItems: "center",
  },
  modalBody: {
    marginTop: "2%",
    height: "65%",
    // borderWidth: 1,
  },
  modalFooter: {
    marginTop: "2%",
    justifyContent: "center",
    height: "16%",
  },
  title: {
    width: "100%",
    alignItems: "center",
  },
  info: {
    // borderWidth: 1,
    width: "100%",
    height: "88%",
    alignItems: "center",
    justifyContent: "center",
  },
  successTitleText: {
    fontFamily: "SF",
    fontSize: 30,
    color: Color.success,
    alignItems: "center",
    justifyContent: "center",
  },
  errorTitleText: {
    fontFamily: "SF",
    fontSize: 30,
    color: Color.danger,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontFamily: "SF",
    fontSize: 25,
    textAlign: "center",
  },
  button: {
    borderRadius: 10,
    marginLeft: "21%",
    marginRight: "21%",
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
});
