import React from 'react';
import {View, Text} from 'react-native';
import {LineDivider} from './LineDivider';

export const PersonDetail = () => {
  return (
    <>
      <View style={{paddingHorizontal: 10}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={{color: '#000', fontSize: 16, fontWeight: '600'}}>
            Your Details{' '}
          </Text>
          <Text style={{color: 'red', fontSize: 16, fontWeight: '400'}}>
            Change
          </Text>
        </View>
        <Text style={{color: '#000', fontSize: 12, fontWeight: '400'}}>
          Divya Sigatapu, 9109109109
        </Text>
      </View>
      <LineDivider width={2} />
    </>
  );
};
