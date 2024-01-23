import { StyleSheet, View } from "react-native";
import React, { useEffect, useState } from "react";
import { Color } from "../constants/color";
import { backButtonAction } from "../utils/headerOption";
import { getEventById } from "../helper/helper";
import Card from "../components/card";
import DatePicker from "../components/datePicker";
import Segment from "../components/segment";
import { chartData } from "../constants/data";
import Graph from "../components/graph";

const backButton = (navigateTo, navigation) => {
  useEffect(() => {
    backButtonAction(navigateTo, navigation, styles.backButton);
  }, [navigation]);
};

const Home = ({ route, navigation }) => {
  backButton("List", navigation);

  const [homeSegment, setHomeSegment] = useState(1);
  const eventId = route.params.itemId;
  const event = getEventById(eventId);

  const [data] = chartData;

  return (
    <View style={styles.container}>
      <Card data={event} />
      <DatePicker />
      <Segment segmentType={homeSegment} changeSegmentType={setHomeSegment} />

      {homeSegment == 1 ? <Graph type="group" data={data} /> : <></>}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  backButton: {
    marginLeft: "10%",
  },
  container: {
    flex: 1,
    backgroundColor: Color.primary,
  },
});
