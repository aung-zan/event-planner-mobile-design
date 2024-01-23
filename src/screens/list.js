import { View, StyleSheet, Text, ScrollView } from "react-native";
import { Color } from "../constants/color";
import { useAuth } from "../provider/authProvider";
import { exhibitions } from "../constants/data";
import { useEffect, useState } from "react";
import { getEventsByType } from "../helper/helper";
import Card from "../components/card";
import Segment from "../components/segment";
import { headerRightAction } from "../utils/headerOption";

const OngoingView = ({ ongoingEvent }) => {
  return (
    <Card key={ongoingEvent.id} data={ongoingEvent} />
  );
};

const PendingView = ({ pendingEvent }) => {
  return (
    <ScrollView>
      {pendingEvent.map((item) => {
        return <Card key={item.id} data={item} />;
      })}
    </ScrollView>
  );
};

const CompleteView = ({ completeEvent }) => {
  return (
    <ScrollView>
      {completeEvent.map((item) => {
        return <Card key={item.id} data={item} />;
      })}
    </ScrollView>
  );
};

const headerRight = (setAuthenticate, navigation) => {
  useEffect(() => {
    headerRightAction(setAuthenticate, navigation);
  }, []);
};

const List = ({ navigation }) => {
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
    fontFamily: "Georgia",
    fontSize: 18,
  }
});

export default List;
