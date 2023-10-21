import React from 'react';
import {View, Text, Image} from 'react-native';

export const ClimateConciousDelivery = () => {
  return (
    <View style={{paddingHorizontal: 10}}>
      <View style={{flexDirection: 'row'}}>
        <Image
          source={require('../assets/GreenLeaf.png')}
          style={{width: 22, height: 22}}
        />
        <Text
          style={{
            color: 'black',
            fontWeight: '600',
            fontSize: 16,
            marginHorizontal: 20,
          }}>
          Climate Concious Delivery
        </Text>
      </View>
      <Text
        style={{
          color: '#00000080',
          fontWeight: '400',
          fontSize: 12,
          paddingHorizontal: 20,
        }}>
        We fund environmental projects to offset the carbon footprint of our
        deliveries.
      </Text>
      <Text
        style={{
          color: 'red',
          fontWeight: '600',
          fontSize: 12,
          padding: 20,
        }}>
        Know More >
      </Text>
      <Text
        style={{
          color: 'red',
          fontWeight: '400',
          fontSize: 12,
          paddingHorizontal: 20,
        }}>
        Orders once placed cannot be cancelled and are non-refundable.
      </Text>
    </View>
  );
};
