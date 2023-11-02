import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
// import {TouchableOpacity} from 'react-native-gesture-handler';
import {useSelector, useDispatch} from 'react-redux';
import {addToCart, decreaseQuantity, incrementQuantity} from '../CartReducer';

export const AddProductToCartButton = ({
  product,
  style,
  index,
  orderModal = false,
}) => {
  const cartItems = useSelector(state => state.cart.cart);
  // console.log(
  //   'cartItems',
  //   cartItems.findIndex(item => item.id == product.id),
  // );

  const dispatch = useDispatch();

  const CustomStyles = {
    width: style.width,
    height: 30,
    position: style.position,
    right: style.right,
    top: orderModal ? 10 : style.top,
    borderRadius: style.borderRadius,
  };

  return (
    <>
      {cartItems.findIndex(item => item.id == product.id) <= -1 ? (
        <TouchableOpacity
          onPress={() => dispatch(addToCart(product))}
          style={[styles.container, {...CustomStyles}, {top: 90}]}>
          <Text style={styles.text}>ADD</Text>
        </TouchableOpacity>
      ) : (
        <View
          style={[
            styles.container,
            {...CustomStyles},
            {borderRadius: 5, top: orderModal ? 10 : 90, right: 20},
          ]}>
          <View
            style={{
              backgroundColor: '#CB202D80',
              borderRadius: 5,
              flexDirection: 'row',
              width: 100,
              padding: 5,
            }}>
            <TouchableOpacity
              style={styles.buttons}
              onPress={() => dispatch(decreaseQuantity(product))}>
              <Text style={{color: 'red', fontSize: 16, fontWeight: '400'}}>
                -
              </Text>
            </TouchableOpacity>
            <Text
              style={{
                color: '#fff',
                fontSize: 16,
                fontWeight: '400',
                marginHorizontal: 10,
              }}>
              {cartItems
                .filter(ele => ele.id == product.id)
                .map(food => food.quantity)}
            </Text>
            <TouchableOpacity
              onPress={() => dispatch(incrementQuantity(product))}
              style={styles.buttons}>
              <Text style={{color: 'red', fontSize: 16, fontWeight: '400'}}>
                +
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#CB202D',
    borderWidth: 1,
    borderColor: '#CB202D',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  buttons: {
    borderColor: 'red',
    borderRadius: 5,
    borderWidth: 0.7,
    backgroundColor: '#fff',
    height: 25,
    width: 30,
    alignItems: 'center',
  },
});
