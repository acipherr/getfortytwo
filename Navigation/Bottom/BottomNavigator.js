import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SignInScreen from '../../screens/SignInScreen';

const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="SignInScreen"
        component={SignInScreen}
        options={{
          headerShown: false,
          tabBarStyle: {
            display: 'none',
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigator;
