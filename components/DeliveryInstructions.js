import React from 'react';
import {View, Text, Image} from 'react-native';
import {LineDivider} from './LineDivider';

export const DeliveryInstructions = () => {
  return (
    <>
      <View style={{paddingHorizontal: 10}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={{color: '#000', fontSize: 16, fontWeight: '600'}}>
            DeliveryInstructions
          </Text>
          <Text style={{color: 'red', fontSize: 16, fontWeight: '400'}}>
            Change
          </Text>
        </View>

        <View style={{marginTop: 5, flexDirection: 'row'}}>
          <Image
            source={require('../assets/Group83.png')}
            style={{width: 18, height: 18}}
          />
          <Text
            style={{
              color: '#000',
              fontSize: 12,
              fontWeight: '400',
              marginHorizontal: 20,
            }}>
            Hand me the Order
          </Text>
        </View>
        <Text
          style={{
            color: 'red',
            fontSize: 12,
            fontWeight: '400',
            textDecorationLine: 'underline',
            textDecorationColor: 'red',
            textAlign: 'center',
            marginTop: 10,
          }}>
          Add Voice Direction..
        </Text>
      </View>
      <LineDivider width={2} />
    </>
  );
};
