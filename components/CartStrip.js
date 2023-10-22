import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {OrderModal} from './OrderModal';
import {useSelector} from 'react-redux';

export const CartStrip = () => {
  const totalCart = useSelector(state => state.cart.cart);
  const totalCartPrice = totalCart.reduce(
    (acc, current) => (acc += current.price * current.quantity),
    0,
  );
  const [orderModal, setOrderModal] = useState(false);

  return (
    <>
      {/*************ORDER MODAL****************/}
      <OrderModal orderModal={orderModal} setOrderModal={setOrderModal} />

      <View
        style={{backgroundColor: '#fff', height: 50, justifyContent: 'center'}}>
        <TouchableOpacity
          onPress={() => setOrderModal(true)}
          style={styles.cartStripContainer}>
          <View>
            <Text style={{color: 'white', fontSize: 10, fontWeight: '400'}}>
              {totalCart.length} ITEM
            </Text>
            <Text style={{color: 'white', fontSize: 10, fontWeight: '400'}}>
              ₹ {totalCartPrice} plus taxes
            </Text>
          </View>
          <View>
            <Text style={{color: 'white', fontSize: 15, fontWeight: '400'}}>
              View Cart
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </>
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
    position: 'sticky',
    bottom: 0,
    left: 10,
    paddingVertical: 6,
  },
});
