import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Color } from "../constants/color";

import Spot from "../screens/spot/spot";
import SpotDetail from "../screens/spot/spotDetail";
import SpotScanner from "../screens/spot/spotScanner";
import SpotVisitor from "../screens/spot/spotVisitor";

import Booth from "../screens/booth/booth";
import BoothDetail from "../screens/booth/boothDetail";
import BoothScanner from "../screens/booth/boothScanner";
import BoothVisitor from "../screens/booth/boothVisitor";

import Seminar from "../screens/seminar/seminar";
import SeminarDetail from "../screens/seminar/seminarDetail";

import Survey from "../screens/survey/survey";
import SurveyDetail from "../screens/survey/surveyDetail";


const Stack = createNativeStackNavigator();

export const SpotGrp = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleStyle: { fontFamily: "SF", color: Color.white },
        headerShadowVisible: false,
        headerStyle: { backgroundColor: Color.secondary }
      }}
    >
      <Stack.Screen name="Spot" component={Spot} />
      <Stack.Screen name="SpotDetail" component={SpotDetail} />
      <Stack.Screen name="SpotScanner" component={SpotScanner} />
      <Stack.Screen name="SpotVisitor" component={SpotVisitor} />
    </Stack.Navigator>
  );
}

export const BoothGrp = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleStyle: { fontFamily: "SF", color: Color.white },
        headerShadowVisible: false,
        headerStyle: { backgroundColor: Color.secondary }
      }}
    >
      <Stack.Screen name="Booth" component={Booth} />
      <Stack.Screen name="BoothDetail" component={BoothDetail} />
      <Stack.Screen name="BoothScanner" component={BoothScanner} />
      <Stack.Screen name="BoothVisitor" component={BoothVisitor} />
    </Stack.Navigator>
  );
}

export const SeminarGrp = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleStyle: { fontFamily: "SF", color: Color.white },
        headerShadowVisible: false,
        headerStyle: { backgroundColor: Color.secondary }
      }}
    >
      <Stack.Screen name="Seminar" component={Seminar} />
      <Stack.Screen name="SeminarDetail" component={SeminarDetail} />
    </Stack.Navigator>
  );
}

export const SurveyGrp = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleStyle: { fontFamily: "SF", color: Color.white },
        headerShadowVisible: false,
        headerStyle: { backgroundColor: Color.secondary }
      }}
    >
      <Stack.Screen name="Survey" component={Survey} />
      <Stack.Screen name="SurveyDetail" component={SurveyDetail} />
    </Stack.Navigator>
  );
}