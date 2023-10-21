import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import StackNavigator from '../Stack/StackNavigator';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="Main"
        component={StackNavigator}
        options={{headerShown: false}}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
