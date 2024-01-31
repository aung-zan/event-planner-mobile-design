import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { headerOptions } from '../../utils/navigatorOptions';

const configHeader = (params) => {
  const navigation = params.navigation;

  useEffect(() => {
    headerOptions(params);
  }, [navigation])
};

const SeminarScanner = ({ route, navigation }) => {
  const navigateTo = "Seminar";
  const title = route.params.name;
  const scanVisitor = "SeminarVisitor";
  const routeParams = route.params;

  configHeader({navigation, navigateTo, title, scanVisitor, routeParams});

  return (
    <View>
      <Text>SeminarScanner</Text>
    </View>
  )
}

export default SeminarScanner

const styles = StyleSheet.create({})