import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Spot from "../screens/spot/spot";
import SpotDetail from "../screens/spot/spotDetail";
import Booth from "../screens/booth/booth";
import BoothDetail from "../screens/booth/boothDetail";
import Seminar from "../screens/seminar/seminar";
import SeminarDetail from "../screens/seminar/seminarDetail";
import Survey from "../screens/survey/survey";
import SurveyDetail from "../screens/survey/surveyDetail";

const Stack = createNativeStackNavigator();

export const SpotGrp = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Spot" component={Spot} />
      <Stack.Screen name="SpotDetail" component={SpotDetail} />
    </Stack.Navigator>
  );
}

export const BoothGrp = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Booth" component={Booth} />
      <Stack.Screen name="BoothDetail" component={BoothDetail} />
    </Stack.Navigator>
  );
}

export const SeminarGrp = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Seminar" component={Seminar} />
      <Stack.Screen name="SeminarDetail" component={SeminarDetail} />
    </Stack.Navigator>
  );
}

export const SurveyGrp = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Survey" component={Survey} />
      <Stack.Screen name="SurveyDetail" component={SurveyDetail} />
    </Stack.Navigator>
  );
}