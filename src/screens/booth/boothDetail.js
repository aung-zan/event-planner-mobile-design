import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { backButtonAction } from '../../utils/headerOption';

const backButton = (navigateTo, navigation) => {
  useEffect(() => {
    backButtonAction(navigateTo, navigation);
  }, [navigation]);
};

const BoothDetail = ({navigation}) => {
  backButton("Booth", navigation);

  return (
    <View>
      <Text>BoothDetail</Text>
    </View>
  )
}

export default BoothDetail

const styles = StyleSheet.create({})