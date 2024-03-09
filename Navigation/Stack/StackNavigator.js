import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import BottomNavigator from '../Bottom/BottomNavigator';
import AutofillOtpScreen from '../../screens/AutofillOtpScreen';
import EnterOtpScreen from '../../screens/EnterOtpScreen';
import DetailScreen from '../../screens/DetailScreen';
import DetailSecondScreen from '../../screens/DetailSecondScreen';
import PaymentScreen from '../../screens/PaymentScreen';

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
        name="EnterOtpScreen"
        component={EnterOtpScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="DetailScreen"
        component={DetailScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="DetailSecondScreen"
        component={DetailSecondScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="PaymentScreen"
        component={PaymentScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
