import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/home";
import { SpotGrp, BoothGrp, SeminarGrp, SurveyGrp } from "./scannerNavigator";
import Visitor from "../screens/visitor";
import TabBar from "../components/tabBar";
import { tabBarOptions, hideOrShowTab } from "../utils/navigatorOptions";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      tabBar={(props) => <TabBar {...props} />}
      initialRouteName="Home"
      screenOptions={({ route }) => (tabBarOptions(route))}
    >
      <Tab.Screen
        name="Spots"
        component={SpotGrp}
        options={({ route }) => ({
          headerShown: false,
          tabBarStyle: hideOrShowTab(route),
        })}
      />
      <Tab.Screen
        name="Booths"
        component={BoothGrp}
        options={({ route }) => ({
          headerShown: false,
          tabBarStyle: hideOrShowTab(route),
        })}
      />
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen
        name="Seminars"
        component={SeminarGrp}
        options={({ route }) => ({
          headerShown: false,
          tabBarStyle: hideOrShowTab(route),
        })}
      />
      <Tab.Screen
        name="Surveys"
        component={SurveyGrp}
        options={({ route }) => ({
          headerShown: false,
          tabBarStyle: hideOrShowTab(route),
        })}
      />
      {/* <Tab.Screen name='Visitor' component={Visitor} /> */}
    </Tab.Navigator>
  );
};

export default Tabs;
