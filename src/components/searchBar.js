import { StyleSheet, Text, TextInput, View } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';
import React from 'react'
import { Color } from '../constants/color';

const SearchBar = ({ type }) => {
  let placeholder = "";

  switch (type) {
    case 1:
      placeholder = "Search entry or exit"
      break;

    case 2:
      placeholder = "Search booth"
      break;
  }
  return (
    <View style={styles.container}>
      <FontAwesome name="search" size={24} color={Color.secondary} />
      <TextInput
        placeholder={placeholder}
        placeholderTextColor="gray"
        style={styles.input}
      />
    </View>
  )
}

export default SearchBar

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginTop: "5%",
    marginHorizontal: "5%",
    alignItems: "center",
    backgroundColor: Color.white,
    height: "6%",
    paddingLeft: "2%",
    // borderWidth: 1,
    borderRadius: 15,
  },
  input: {
    // borderWidth: 1,
    width: "80%",
    height: "100%",
    marginLeft: "2%",
    paddingLeft: "2%",
    fontFamily: "SF",
  }
})