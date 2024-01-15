import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Spot from "../screens/spot";
import SpotDetail from "../screens/spotDetail";

const Stack = createNativeStackNavigator();

const ScannerStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Spot" component={Spot} />
      <Stack.Screen name="SpotDetail" component={SpotDetail} />
    </Stack.Navigator>
  );
}

export default ScannerStack;