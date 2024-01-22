import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { backButtonAction } from '../../utils/headerOption';

const backButton = (navigateTo, navigation) => {
  useEffect(() => {
    backButtonAction(navigateTo, navigation);
  }, [navigation]);
};

const SeminarDetail = ({navigation}) => {
  backButton("Seminar", navigation);

  return (
    <View>
      <Text>SeminarDetail</Text>
    </View>
  )
}

export default SeminarDetail

const styles = StyleSheet.create({})