import { ScrollView, StyleSheet, Text, View } from "react-native";
import {
  VictoryBar,
  VictoryGroup,
  VictoryChart,
  VictoryAxis,
} from "victory-native";
import React from "react";
import { Color } from "../constants/color";

const GraphInfo = ({ info }) => {
  return (
    <View style={styles.graphInfo}>
      <View style={styles.Info}>
        <Text style={styles.InfoText}>{info.total}</Text>
        <Text style={styles.InfoText}>Total</Text>
      </View>
      <View style={styles.Info}>
        <Text style={styles.InfoText}>{info.enter}</Text>
        <Text style={[styles.InfoText, styles.InfoTextCurrent]}>Enter</Text>
      </View>
      <View style={styles.Info}>
        <Text style={styles.InfoText}>{info.exit}</Text>
        <Text style={[styles.InfoText, styles.InfoTextExit]}>Exit</Text>
      </View>
    </View>
  );
};

const Graph = ({ type, data }) => {
  const chartData = data.data;

  return (
    <>
      <View style={styles.graph}>
        <ScrollView horizontal>
          <VictoryChart
            height={287}
            width={600}
            padding={{ left: 30, right: 0, bottom: 50, top: 25 }}
          >
            {type == 'group' ? (
              <VictoryGroup
                offset={20}
                colorScale={[Color.success, Color.danger]}
              >
                <VictoryBar data={chartData} x="hour" y="entering" />
                <VictoryBar data={chartData} x="hour" y="exiting" />
              </VictoryGroup>
            ) : (
              <VictoryBar data={chartData} x="hour" y="entering" />
            )}
            <VictoryAxis tickValues={chartData.map((item) => item.hour)} />
            <VictoryAxis dependentAxis />
          </VictoryChart>
        </ScrollView>
      </View>

      <GraphInfo info={data.info} />
    </>
  );
};

export default Graph;

const styles = StyleSheet.create({
  graph: {
    height: "36%",
  },
  graphInfo: {
    marginHorizontal: "5%",
    height: "10%",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  Info: {
    width: "20%",
    alignItems: "center",
    justifyContent: "center",
  },
  InfoText: {
    fontFamily: "SF",
    fontSize: 18,
    color: Color.black,
  },
  InfoTextCurrent: {
    color: Color.success,
  },
  InfoTextExit: {
    color: Color.danger,
  },
});

// for dotted lines, add this style to VictoryAxis
// style={{
//   axis: { stroke: 'black' }, // Change the color of the axis line
//   ticks: { stroke: 'black', size: 5, strokeDasharray: '3,3' }, // Dotted line effect
//   tickLabels: { fontSize: 12 },
// }}
