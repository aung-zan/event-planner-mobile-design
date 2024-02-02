import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Tabs from './tabNavigator';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerPosition: "right",
      }}
    >
      <Drawer.Screen name="Tab" component={Tabs} />
    </Drawer.Navigator>
  )
}

export default DrawerNavigator