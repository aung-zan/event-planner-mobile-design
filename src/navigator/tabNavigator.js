import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/home";
import { SpotGrp, BoothGrp, SeminarGrp, SurveyGrp } from "./scannerNavigator";
import Visitor from "../screens/visitor";
import TabBar from "../components/tabBar";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      tabBar={(props) => <TabBar {...props} />}
      screenOptions={{ headerShown: false }}
      initialRouteName="Home"
    >
      <Tab.Screen name="Spots" component={SpotGrp} />
      <Tab.Screen name="Booths" component={BoothGrp} />
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Seminars" component={SeminarGrp} />
      <Tab.Screen name="Surveys" component={SurveyGrp} />
      {/* <Tab.Screen name='Visitor' component={Visitor} /> */}
    </Tab.Navigator>
  );
};

export default Tabs;
