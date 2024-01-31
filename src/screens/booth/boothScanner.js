import { StyleSheet, Text, View } from 'react-native'
import { headerOptions } from '../../utils/navigatorOptions';
import React, { useEffect } from 'react'
import { Color } from '../../constants/color';

const configHeader = (params) => {
  const navigation = params.navigation;

  useEffect(() => {
    headerOptions(params);
  }, [navigation])
}

const BoothScanner = ({ route, navigation }) => {
  const navigateTo = "Booth";
  const scanVisitor = "BoothVisitor";
  const title = route.params.name;
  const routeParams = route.params;

  configHeader({navigation, navigateTo, title, scanVisitor, routeParams})

  return (
    <View style={styles.background}>
      <View style={styles.container}>
        <Text>BoothScanner</Text>
      </View>
    </View>
  )
}

export default BoothScanner

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: Color.secondary,
  },
  container: {
    flex: 1,
    backgroundColor: Color.primary,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
})