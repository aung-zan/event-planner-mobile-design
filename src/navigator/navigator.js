import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screens/login";
import List from "../screens/list";
import { useAuth } from "../provider/authProvider";
import Tabs from "./tabNavigator";
import { Color } from "../constants/color";

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
            <Stack.Screen
              name="List"
              component={List}
              options={{ headerStyle: { backgroundColor: Color.secondary } }}
            />
            <Stack.Screen
              name="Tab"
              component={Tabs}
              options={{ headerShown: false }}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
