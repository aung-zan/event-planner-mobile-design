import { HeaderBackButton } from "@react-navigation/elements";
import { Color } from "../constants/color";

// should move to the utils/headerOptions.js
export const backButtonAction = (navigateTo, navigation, style) => {
  navigation.setOptions({
    headerLeft: () => {
      return (
        <HeaderBackButton
          labelVisible={false}
          onPress={() => {
            navigation.navigate(navigateTo);
          }}
          tintColor={Color.pending}
          style={style}
        />
      );
    },
  });
};

export const getEventsByType = (events) => {
  let result = {
    ongoing: null,
    pending: [],
    complete: [],
  };

  events.map((data) => {
    switch (data.type) {
      case "ongoing":
        result.ongoing = data;
        break;
      case "pending":
        result.pending.push(data);
        break;
      case "complete":
        result.complete.push(data);
        break;
    }
  });

  return result;
}
