import { HeaderBackButton } from "@react-navigation/elements";
import { Color } from "../constants/color";

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
