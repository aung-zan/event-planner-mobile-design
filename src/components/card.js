import { StyleSheet, Text, View, Pressable } from 'react-native'
import { Color } from '../constants/color';
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React from 'react'

const Card = ({ data }) => {
  const navigation = useNavigation();
  let styleType;

  switch (data.type) {
    case "ongoing":
      styleType = styles.ongoingCard;
      break;
    case "pending":
      styleType = styles.pendingCard;
      break;
    case "complete":
      styleType = styles.completeCard;
      break;
  }

  const cardOnClick = (id) => {
    const params = {
      itemId: id,
    };
    navigation.navigate("Tab", {
      screen: "Home",
      params: params,
    });
  }

  return (
    <Pressable style={[styles.card, styleType]} onPress={() => cardOnClick(data.id)}>

      <View style={styles.cardBody}>
        <View style={styles.cardTitle}>
          <Text style={styles.title}>{data.name}</Text>
        </View>

        <View style={styles.cardInfo}>
          <FontAwesome5 name="calendar" size={18} color={Color.white} />
          <Text style={styles.info}>{data.datetime}</Text>
        </View>

        <View style={styles.cardInfo}>
          <FontAwesome5 name="map-marker-alt" size={18} color={Color.white} />
          <Text style={styles.info}>{data.location}</Text>
        </View>
      </View>

      <View style={styles.cardIcon}>
        <FontAwesome5 name="chevron-right" size={24} color="white" />
      </View>

    </Pressable>
  );
}

export default Card

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    marginHorizontal: "5%",
    marginTop: "5%",
    paddingVertical: "2%",
    paddingHorizontal: "2%",
    borderRadius: 15,
    elevation: 5, // Android shadow
    shadowColor: "#000", // iOS shadow
    shadowOffset: { width: 1, height: 1 }, // iOS shadow
    shadowOpacity: 0.5, // iOS shadow
    shadowRadius: 4, // iOS shadow
  },
  ongoingCard: {
    backgroundColor: Color.success,
    height: 160,
  },
  pendingCard: {
    backgroundColor: Color.warning,
    height: 160,
  },
  completeCard: {
    backgroundColor: Color.danger,
    height: 160,
  },
  cardBody: {
    width: "91%",
  },
  cardIcon: {
    marginLeft: "2%",
    width: "5%",
    paddingTop: "7%",
  },
  cardTitle: {
    maxHeight: "60%",
  },
  cardInfo: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: "2%"
  },
  title: {
    fontFamily: "SF",
    fontSize: 18,
    color: Color.white,
  },
  info: {
    fontFamily: "SF",
    fontSize: 15,
    color: Color.white,
    paddingLeft: "3%",
  },
})