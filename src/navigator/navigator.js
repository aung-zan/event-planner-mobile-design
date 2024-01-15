import {
  NavigationContainer,
  getFocusedRouteNameFromRoute,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screens/login";
import List from "../screens/list";
import { useAuth } from "../provider/authProvider";
import Tabs from "./tabNavigator";

const Stack = createNativeStackNavigator();

const Navigator = () => {
  const { authenticated } = useAuth();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {authenticated == false ? (
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ headerShown: false }}
          />
        ) : (
          <>
            <Stack.Screen name="List" component={List} />
            <Stack.Screen
              name="Tab"
              component={Tabs}
              options={({ route }) => {
                const currentRouteName = getFocusedRouteNameFromRoute(route);
                return {
                  title:
                    currentRouteName == undefined ? "Home" : currentRouteName,
                };
              }}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
