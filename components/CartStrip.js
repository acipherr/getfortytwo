import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

export const CartStrip = () => {
  return (
    <TouchableOpacity style={styles.cartStripContainer}>
      <View>
        <Text style={{color: 'white', fontSize: 10, fontWeight: '400'}}>
          1 ITEM
        </Text>
        <Text style={{color: 'white', fontSize: 10, fontWeight: '400'}}>
          279 plus taxes
        </Text>
      </View>
      <View>
        <Text style={{color: 'white', fontSize: 15, fontWeight: '400'}}>
          View Cart
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cartStripContainer: {
    backgroundColor: '#CB202D',
    borderRadius: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    marginHorizontal: 10,
    paddingLeft: 15,
    paddingRight: 25,
    paddingVertical: 6,
  },
});
