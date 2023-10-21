import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {LineDivider} from './LineDivider';

export const TipCard = () => {
  const tipGifts = [
    {
      url: require('../assets/cola.png'),
      price: ` ₹20`,
    },
    {
      url: require('../assets/ice.png'),
      price: `₹30`,
      special: 'MOST TIPPED',
    },
    {
      url: require('../assets/donut.png'),
      price: `₹40`,
    },
    {
      url: require('../assets/gift.png'),
      price: `₹50`,
    },
  ];

  return (
    <View style={{paddingHorizontal: 10}}>
      <Text style={{color: 'black', fontSize: 16, fontWeight: '600'}}>
        Please Tip Your Wallet
      </Text>
      <Text style={{color: '#00000080', fontSize: 12, fontWeight: '400'}}>
        Support your wallet to make their day! 100% of your tip will be
        transferred to your wallet
      </Text>
      <LineDivider width={0.5} />

      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        {tipGifts.map((tip, index) => (
          <View key={index} style={styles.container}>
            <Image source={tip.url} style={{height: 30, width: 30}} />
            <Text style={{color: '#000'}}>{tip.price}</Text>
            {tip?.special ? (
              <Text style={{color: 'red', fontSize: 8}}>{tip.special}</Text>
            ) : null}
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 80,
    height: 70,
    borderColor: '#00000090',
    borderWidth: 0.7,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
