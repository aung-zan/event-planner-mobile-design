import { StyleSheet, Text, View, Pressable } from "react-native";
import { Color } from "../constants/color";
import React from "react";

const Segment = ({segmentType, changeSegmentType}) => {
  let upcomingStyle;
  let completeStyle;

  if (segmentType == 1) {
    upcomingStyle = [styles.segmentButton, styles.segmentActiveButton];
    completeStyle = [styles.segmentButton];
  } else {
    upcomingStyle = [styles.segmentButton];
    completeStyle = [styles.segmentButton, styles.segmentActiveButton];
  }

  return (
    <View style={styles.segment}>
      {/* for dynamic, use map */}
      <Pressable style={upcomingStyle} onPress={() => changeSegmentType(1)}>
        <Text style={styles.segmentText}>Upcoming</Text>
      </Pressable>
      <Pressable style={completeStyle} onPress={() => changeSegmentType(2)}>
        <Text style={styles.segmentText}>Completed</Text>
      </Pressable>
    </View>
  );
};

export default Segment;

const styles = StyleSheet.create({
  segment: {
    borderBottomWidth: 2,
    borderBottomColor: Color.secondary,
    flexDirection: "row",
    marginHorizontal: "5%",
    marginTop: "5%",
    height: "5%",
    // justifyContent: "space-evenly"
  },
  segmentButton: {
    borderColor: "red",
    justifyContent: "center",
    marginRight: "10%",
    paddingHorizontal: "2%",
  },
  segmentActiveButton: {
    borderBottomWidth: 3,
    borderBottomColor: Color.black,
  },
  segmentText: {
    fontFamily: "Georgia",
    fontSize: 18,
    color: Color.black,
  },
});
