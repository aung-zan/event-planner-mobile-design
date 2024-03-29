import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { headerOptions } from '../utils/navigatorOptions';
import { getItem } from '../utils/storage';

const headerConfig = (navigation) => {
  const setHeader = async () => {
    const id = await getItem('itemId');
    const close = "Home";
    const routeParams = {itemId: id};

    headerOptions({ navigation, close, routeParams });
  }
  useEffect(() => {
    setHeader();
  }, [navigation]);
};

const Visitor = ({ navigation }) => {
  headerConfig(navigation);

  return (
    <View>
      <Text>Visitor</Text>
    </View>
  )
}

export default Visitor

const styles = StyleSheet.create({})