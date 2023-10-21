import React from 'react';
import {View} from 'react-native';

export const LineDivider = ({width = 0}) => {
  return (
    <View
      style={{borderWidth: width, borderColor: '#E5E5E5', marginVertical: 10}}
    />
  );
};
