import { View, StyleSheet, Text, ScrollView } from "react-native";
import { Color } from "../constants/color";
import { useAuth } from "../provider/authProvider";
import { exhibitions } from "../constants/data";
import { useEffect, useState } from "react";
import { getEventsByType } from "../helper/helper";
import Card from "../components/card";
import { listSegment } from "../constants/data";
import Segment from "../components/segment";
import { headerRightAction } from "../utils/navigatorOptions";

// ongoing card
const OngoingView = ({ ongoingEvent }) => {
  return <Card key={ongoingEvent.id} data={ongoingEvent} />;
};

// pending card list
const PendingView = ({ pendingEvent }) => {
  return (
    <ScrollView>
      {pendingEvent.map((item) => {
        return <Card key={item.id} data={item} />;
      })}
    </ScrollView>
  );
};

// complete card list
const CompleteView = ({ completeEvent }) => {
  return (
    <ScrollView>
      {completeEvent.map((item) => {
        return <Card key={item.id} data={item} />;
      })}
    </ScrollView>
  );
};

// header right (profile icon logout)
const headerRight = (setAuthenticate, navigation) => {
  useEffect(() => {
    headerRightAction(setAuthenticate, navigation);
  }, []);
};

const EventList = ({ navigation }) => {
  const { setAuthenticate } = useAuth();
  headerRight(setAuthenticate, navigation);

  const [segmentType, setSegmentType] = useState(1);

  const result = getEventsByType(exhibitions);
  const ongoingEvent = result.ongoing;
  const pendingEvent = result.pending;
  const completeEvent = result.complete;

  const changeSegmentType = (type) => {
    setSegmentType(type);
  };

  return (
    <View style={styles.background}>
      <View style={styles.container}>
        <View style={styles.title}>
          <Text style={styles.titleText}>Ongoing Event</Text>
        </View>

        <OngoingView ongoingEvent={ongoingEvent} />

        <Segment
          segments={listSegment}
          segmentType={segmentType}
          changeSegmentType={changeSegmentType}
        />

        {segmentType == 1 ? (
          <PendingView pendingEvent={pendingEvent} />
        ) : (
          <CompleteView completeEvent={completeEvent} />
        )}
      </View>
    </View>
  );
};

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
  title: {
    marginTop: "5%",
    marginHorizontal: "5%",
    justifyContent: "center",
    paddingLeft: "2%",
  },
  titleText: {
    fontFamily: "SF",
    fontSize: 18,
  },
});

export default EventList;
