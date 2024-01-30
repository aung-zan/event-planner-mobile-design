import { StyleSheet, Text, View, Pressable } from "react-native";
import { Color } from "../constants/color";
import React from "react";

const Segment = ({ segments, segmentType, changeSegmentType }) => {
  let style;

  return (
    <View style={styles.segment}>
      {segments.map((item) => {
        style =
          segmentType == item.key
            ? [styles.segmentButton, styles.segmentActiveButton]
            : [styles.segmentButton];

        return (
          <Pressable
            key={item.key}
            style={style}
            onPress={() => changeSegmentType(item.key)}
          >
            <Text style={styles.segmentText}>{item.name}</Text>
          </Pressable>
        );
      })}
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
    marginTop: "4%",
    height: "5%",
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
    fontFamily: "SF",
    fontSize: 18,
    color: Color.black,
  },
});
