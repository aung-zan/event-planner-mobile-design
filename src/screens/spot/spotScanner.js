import React, { useState, useEffect, useLayoutEffect } from "react";
import { Text, View, StyleSheet, Button, Pressable } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import { backButtonAction, setHeaderTitle } from "../../utils/navigatorOptions";
import { checkQrCode } from "../../helper/helper";
import { ErrorModal, SuccessModal } from "../../components/modal";
import { Color } from "../../constants/color";

const backButton = (navigateTo, navigation, headerTitle) => {
  useEffect(() => {
    backButtonAction(navigateTo, navigation);
    setHeaderTitle(navigation, headerTitle);
  }, []);
};

const SpotScanner = ({ route, navigation }) => {
  const headerTitle = route.params.params.name;
  backButton("Spot", navigation, headerTitle);

  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState(null);

  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    };

    getBarCodeScannerPermissions();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    // alert(`Bar code with type ${type} and data ${data} has been scanned!`);
    const result = checkQrCode(data);
    setModalType(result);

    setScanned(true);
    setShowModal(true);
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />

      {modalType ? (
        <SuccessModal showModal={showModal} modalHandler={setShowModal} />
      ) : (
        <ErrorModal showModal={showModal} modalHandler={setShowModal} />
      )}
      {scanned && (
        <Pressable style={styles.button} onPress={() => setScanned(false)}>
          <Text style={styles.text}>Tap to Scan Again</Text>
        </Pressable>
      )}
    </View>
  );
};

export default SpotScanner;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    // borderWidth: 1,
    position: 'absolute',
    bottom: "10%",
    alignItems: "center",
    justifyContent: "center",
    left: "15%",
    right: "15%",
    height: "9%",
    backgroundColor: Color.secondary,
    borderRadius: 15,
  },
  text: {
    fontFamily: "SF",
    fontSize: 20,
    color: Color.white,
  },
});
