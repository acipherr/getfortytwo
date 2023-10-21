import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import BottomNavigator from '../Bottom/BottomNavigator';
import AutofillOtpScreen from '../../screens/AutofillOtpScreen';
import HomeScreen from '../../screens/HomeScreen';
import RestaurantDetail from '../../screens/RestaurantDetail';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={BottomNavigator}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AutoFillOtpScreen"
        component={AutofillOtpScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="RestaurantPage"
        component={RestaurantDetail}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
