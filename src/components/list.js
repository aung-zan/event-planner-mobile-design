import { StyleSheet, Text, View, ScrollView, Pressable } from "react-native";
import { FontAwesome5 } from '@expo/vector-icons';
import { Color } from "../constants/color";
import React from "react";

const List = ({ data, icon, onPress }) => {
  return (
    <View style={styles.listContainer}>
      <ScrollView>

        {data.map((item) => {
          const params = {
            itemId: item.id,
            name: item.name,
          };

          return (
            <Pressable
              key={item.id}
              style={styles.item}
              onPress={() => onPress(params)}
            >
              <View style={styles.itemIcon}>{icon}</View>
              <View style={styles.itemInfo}>
                <Text style={styles.itemText}>{item.name}</Text>
              </View>
              <View>
                <FontAwesome5
                  name="chevron-right"
                  size={23}
                  color={Color.secondary}
                />
              </View>
            </Pressable>
          );
        })}

      </ScrollView>
    </View>
  );
};

export default List;

const styles = StyleSheet.create({
  listContainer: {
    marginTop: "5%",
    marginHorizontal: "5%",
    height: "64%",
  },
  item: {
    marginTop: "5%",
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: "4%",
    borderRadius: 15,
    borderWidth: 1,
    borderColor: Color.black,
  },
  itemIcon: {
    marginLeft: "2%",
    borderRadius: 50,
    backgroundColor: Color.secondary,
    paddingHorizontal: 12,
    paddingVertical: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  itemInfo: {
    // borderWidth: 1,
    marginLeft: "10%",
    width: "65%",
  },
  itemText: {
    fontFamily: "SF",
    fontSize: 20,
    color: Color.black,
  },
});
