import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { backButtonAction } from '../../utils/headerOption';

const backButton = (navigateTo, navigation) => {
  useEffect(() => {
    backButtonAction(navigateTo, navigation);
  }, [navigation]);
};

const SurveyDetail = ({navigation}) => {
  backButton("Survey", navigation);

  return (
    <View>
      <Text>SurveyDetail</Text>
    </View>
  )
}

export default SurveyDetail

const styles = StyleSheet.create({})