import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/home";
import { SpotGrp, BoothGrp, SeminarGrp, SurveyGrp } from "./scannerNavigator";
import TabBar from "../components/tabBar";
import Visitor from "../screens/visitor";
import { Color } from "../constants/color";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      tabBar={(props) => <TabBar {...props} />}
      initialRouteName="Home"
      screenOptions={{
        headerTitleStyle: { fontFamily: "SF", color: Color.white },
        headerShadowVisible: false,
        headerStyle: { backgroundColor: Color.secondary }
      }}
    >
      <Tab.Screen
        name="Spots"
        component={SpotGrp}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Booths"
        component={BoothGrp}
        options={{ headerShown: false }}
      />
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen
        name="Seminars"
        component={SeminarGrp}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Surveys"
        component={SurveyGrp}
        options={{ headerShown: false }}
      />
      {/* <Tab.Screen name='Visitor' component={Visitor} /> */}
    </Tab.Navigator>
  );
};

export default Tabs;
