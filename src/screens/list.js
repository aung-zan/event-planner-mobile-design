import { View, StyleSheet, Text, Pressable, ScrollView } from "react-native";
import { removeItem } from "../utils/storage";
import { Color } from "../constants/color";
import { useAuth } from "../provider/authProvider";
import { exhibitions } from "../constants/data";
import { useState } from "react";
import { getEventsByType } from "../helper/helper";
import Card from "../components/card";
import Segment from "../components/segment";

const OngoingView = ({ ongoingEvent }) => {
  return (
    <Card key={ongoingEvent.id} type="ongoing" data={ongoingEvent.name} />
  );
};

const PendingView = ({ pendingEvent }) => {
  return (
    <ScrollView>
      {pendingEvent.map((item) => {
        return <Card key={item.id} type="pending" data={item.name} />;
      })}
    </ScrollView>
  );
};

const CompleteView = ({ completeEvent }) => {
  return (
    <ScrollView>
      {completeEvent.map((item) => {
        return <Card key={item.id} type="complete" data={item.name} />;
      })}
    </ScrollView>
  );
};

const List = ({ navigation }) => {
  const { setAuthenticate } = useAuth();
  const [segmentType, setSegmentType] = useState(1);

  const result = getEventsByType(exhibitions);
  const ongoingEvent = result.ongoing;
  const pendingEvent = result.pending;
  const completeEvent = result.complete;

  // const logout = async () => {
  //   await removeItem("token");
  //   setAuthenticate(false);
  // };

  // const toHome = () => {
  //   navigation.navigate("Tab");
  // };

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
    // borderWidth: 1,
    marginTop: "5%",
    marginHorizontal: "5%",
    // height: "5%",
    justifyContent: "center",
    paddingLeft: "2%",
  },
  titleText: {
    fontFamily: "Georgia",
    fontSize: 18,
  },
  button: {
    borderWidth: 1,
    borderRadius: 10,
    marginTop: "7%",
    marginLeft: "21%",
    marginRight: "21%",
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Color.pending,
    borderColor: Color.pending,
  },
  buttonText: {
    fontFamily: "Georgia",
    fontSize: 20,
    color: Color.white,
  },
});

export default List;
