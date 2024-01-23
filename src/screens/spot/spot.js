import { Pressable, ScrollView, SectionList, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { backButtonAction } from "../../utils/headerOption";
import { Color } from "../../constants/color";
import SearchBar from "../../components/searchBar";
import { spotData } from "../../constants/data";
import Segment from "../../components/segment";
import { FontAwesome } from '@expo/vector-icons';
import { getSpotByType } from "../../helper/helper";

const backButton = (navigateTo, navigation) => {
  useEffect(() => {
    backButtonAction(navigateTo, navigation);
  }, [navigation]);
};

const EntryList = ({entry}) => {
  return (
    <View style={styles.listContainer}>
      <ScrollView>

        {entry.map((item) => {
          return (
            <View key={item.id} style={styles.item}>
              <View style={styles.itemIcon}>
                <FontAwesome name="sign-in" size={23} color={Color.white} />
              </View>
              <View style={styles.itemInfo}>
                <Text style={styles.itemText}>{item.name}</Text>
              </View>
            </View>
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
  console.log(spots);

  return (
    <View style={styles.container}>
      <SearchBar type={1} />
      <Segment segmentType={spotType} changeSegmentType={setSpotType} />

      <EntryList entry={spots.entry} />
    </View>
  );
};

export default Spot;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.primary,
  },
  listContainer: {
    // borderWidth: 1,
    marginTop: "5%",
    marginHorizontal: "5%",
    height: "64%",
  },
  item: {
    // borderWidth: 1,
    marginTop: "5%",
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: "4%",
    borderRadius: 15,
    backgroundColor: Color.white,
  },
  itemIcon: {
    marginLeft: "2%",
    borderRadius: 50,
    backgroundColor: Color.pending,
    paddingHorizontal: 12,
    paddingVertical: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  itemInfo: {
    marginLeft: "10%",
  },
  itemText: {
    fontSize: 20,
    color: Color.black,
  }
});
