import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screens/login";
import EventList from "../screens/eventList";
import { useAuth } from "../provider/authProvider";
import { Color } from "../constants/color";
import DrawerNavigator from "./drawerNavigator";

const Stack = createNativeStackNavigator();

const Navigator = () => {
  const { authenticated } = useAuth();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTitleStyle: { fontFamily: "SF", color: Color.white },
          headerShadowVisible: false,
        }}
      >
        {authenticated == false ? (
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ headerShown: false }}
          />
        ) : (
          <>
            <Stack.Screen
              name="EventList"
              component={EventList}
              options={{
                headerStyle: { backgroundColor: Color.secondary },
                title: "Event List",
              }}
            />
            <Stack.Screen
              name="Drawer"
              component={DrawerNavigator}
              options={{ headerShown: false }}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
