import { Pressable, ScrollView, SectionList, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { backButtonAction } from "../../utils/navigatorOptions";
import { Color } from "../../constants/color";
import SearchBar from "../../components/searchBar";
import { spotData, spotSegment } from "../../constants/data";
import Segment from "../../components/segment";
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { getSpotByType } from "../../helper/helper";
import { useFocusEffect } from "@react-navigation/native";

const backButton = (navigateTo, navigation) => {
  useEffect(() => {
    backButtonAction(navigateTo, navigation);
  }, [navigation]);
};

const List = ({spot, icon, onPress}) => {
  return (
    <View style={styles.listContainer}>
      <ScrollView>

        {spot.map((item) => {
          return (
            <Pressable key={item.id} style={styles.item} onPress={ () => onPress() }>
              <View style={styles.itemIcon}>
                {icon}
              </View>
              <View style={styles.itemInfo}>
                <Text style={styles.itemText}>{item.name}</Text>
              </View>
              <View style={{marginLeft: "45%"}}>
                <FontAwesome5 name="chevron-right" size={23} color={Color.secondary} />
              </View>
            </Pressable>
          );
        })}

      </ScrollView>
    </View>
  );
}

const Spot = ({ navigation }) => {
  backButton("List", navigation);

  const [spotType, setSpotType] = useState(1);
  const spots = getSpotByType(spotData);

  if (spotType == 1) {
    icon = <FontAwesome name="sign-in" size={23} color={Color.white} />;
  } else {
    icon = <FontAwesome name="sign-out" size={23} color={Color.white} />;
  }

  const toScanner = () => {
    navigation.navigate("SpotScanner");
  }

  return (
    <View style={styles.background}>
      <View style={styles.container}>
        <SearchBar type={1} />
        <Segment segments={spotSegment} segmentType={spotType} changeSegmentType={setSpotType} />

        <List spot={spotType == 1 ? spots.entry : spots.exit} icon={icon} onPress={toScanner} />
      </View>
    </View>
  );
};

export default Spot;

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
  listContainer: {
    marginTop: "5%",
    marginHorizontal: "5%",
    height: "64%",
  },
  item: {
    marginTop: "5%",
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: "4%",
    borderRadius: 15,
    borderWidth: 1,
    borderColor: Color.secondary,
  },
  itemIcon: {
    marginLeft: "2%",
    borderRadius: 50,
    backgroundColor: Color.secondary,
    paddingHorizontal: 12,
    paddingVertical: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  itemInfo: {
    marginLeft: "10%",
  },
  itemText: {
    fontFamily: "SF",
    fontSize: 20,
    color: Color.black,
  }
});
