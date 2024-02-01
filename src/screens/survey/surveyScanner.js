import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { headerOptions } from '../../utils/navigatorOptions';
import { Color } from '../../constants/color';

const configHeader = (params) => {
  const navigation = params.navigation;

  useEffect(() => {
    headerOptions(params);
  }, [navigation]);
};

const SurveyScanner = ({ route, navigation }) => {
  const navigateTo = "Survey";
  const title = route.params.name;
  const scanVisitor = "SurveyVisitor";
  const routeParams = route.params;

  configHeader({ navigation, navigateTo, title, scanVisitor, routeParams });

  return (
    <View style={styles.background}>
      <View style={styles.container}></View>
    </View>
  )
}

export default SurveyScanner

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