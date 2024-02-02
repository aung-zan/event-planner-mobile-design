import { StyleSheet, View } from "react-native";
import React, { useEffect, useState } from "react";
import { Color } from "../constants/color";
import { backButtonAction, headerOptions } from "../utils/navigatorOptions";
import { getEventById } from "../helper/helper";
import Card from "../components/card";
import DatePicker from "../components/datePicker";
import Segment from "../components/segment";
import { chartData, homeSegment } from "../constants/data";
import Graph from "../components/graph";

// custom back button
const configHeader = (params) => {
  const navigation = params.navigation;

  useEffect(() => {
    headerOptions(params);
  }, [navigation]);
};

const Home = ({ route, navigation }) => {
  const backButtonStyle = styles.backButton;
  const navigateTo = "EventList";
  const profile = true;
  configHeader({navigation, navigateTo, backButtonStyle, profile});

  const [segmentType, setSegmentType] = useState(1);
  const eventId = route.params.itemId;
  const event = getEventById(eventId);

  const [data] = chartData;

  return (
    <View style={styles.background}>
      <View style={styles.container}>
        <Card data={event} type="normal" />
        <DatePicker from={event.from} to={event.to} />
        <Segment
          segments={homeSegment}
          segmentType={segmentType}
          changeSegmentType={setSegmentType}
        />

        {segmentType == 1 ? <Graph type="group" data={data} /> : <></>}
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  backButton: {
    marginLeft: "10%",
  },
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
