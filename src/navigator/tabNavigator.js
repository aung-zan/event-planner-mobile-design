import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/home';
import ScannerStack from './scannerNavigator';
import Visitor from '../screens/visitor';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name='Home' component={Home} />
      <Tab.Screen name='Scanner' component={ScannerStack} />
      <Tab.Screen name='Visitor' component={Visitor} />
    </Tab.Navigator>
  );
}

export default Tabs;