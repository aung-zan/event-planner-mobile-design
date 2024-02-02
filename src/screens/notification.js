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

const Notification = ({ navigation }) => {
  headerConfig(navigation);

  return (
    <View>
      <Text>Notification</Text>
    </View>
  )
}

export default Notification

const styles = StyleSheet.create({})