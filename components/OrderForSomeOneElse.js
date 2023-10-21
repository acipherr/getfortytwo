import React from 'react';
import {View, Text} from 'react-native';
import {LineDivider} from './LineDivider';

export const OrderForSomeOneElse = () => {
  return (
    <>
      <View style={{paddingHorizontal: 10}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={{color: '#000', fontSize: 16, fontWeight: '600'}}>
            Order For SomeOne Else
          </Text>
          <Text style={{color: 'red', fontSize: 16, fontWeight: '400'}}>
            Add
          </Text>
        </View>
        <Text style={{color: '#00000080', fontSize: 12, fontWeight: '400'}}>
          Send a Personalise message for them
        </Text>
      </View>

      <LineDivider width={2} />
    </>
  );
};
