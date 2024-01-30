import { StyleSheet, View } from "react-native";
import React, { useEffect, useState } from "react";
import { backButtonAction } from "../../utils/navigatorOptions";
import { Color } from "../../constants/color";
import SearchBar from "../../components/searchBar";
import { spotData, spotSegment } from "../../constants/data";
import Segment from "../../components/segment";
import { FontAwesome } from "@expo/vector-icons";
import { getSpotByType } from "../../helper/helper";
import List from "../../components/list";

// custom back button
const backButton = (navigateTo, navigation) => {
  useEffect(() => {
    backButtonAction(navigateTo, navigation);
  }, [navigation]);
};

const Spot = ({ navigation }) => {
  backButton("EventList", navigation);

  const [spotType, setSpotType] = useState(1);
  const spots = getSpotByType(spotData);

  if (spotType == 1) {
    icon = <FontAwesome name="sign-in" size={23} color={Color.white} />;
  } else {
    icon = <FontAwesome name="sign-out" size={23} color={Color.white} />;
  }

  const toScanner = (params) => {
    navigation.navigate('SpotScanner', {
      screen: "SpotScanner",
      params: params
    });
  };

  return (
    <View style={styles.background}>
      <View style={styles.container}>
        <SearchBar type={1} />
        <Segment
          segments={spotSegment}
          segmentType={spotType}
          changeSegmentType={setSpotType}
        />

        <List
          data={spotType == 1 ? spots.entry : spots.exit}
          icon={icon}
          onPress={toScanner}
        />
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
});
