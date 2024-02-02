import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Tabs from './tabNavigator';
import CustomDrawer from '../components/customDrawer';
import { Color } from '../constants/color';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
        drawerPosition: "right",
        drawerStyle: {
          backgroundColor: Color.primary,
        }
      }}
    >
      <Drawer.Screen name="Tab" component={Tabs} />
    </Drawer.Navigator>
  )
}

export default DrawerNavigator