import React from 'react';
import {
  View,
  Modal,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {TipCard} from './TipCard';
import {LineDivider} from './LineDivider';
import {DeliveryInstructions} from './DeliveryInstructions';
import {PersonDetail} from './PersonDetail';
import {OrderForSomeOneElse} from './OrderForSomeOneElse';
import {ClimateConciousDelivery} from './ClimateConciousDelivery';
// import {TouchableOpacity} from 'react-native-gesture-handler';
import {useSelector} from 'react-redux';
import {AddProductToCartButton} from './AddProductToCartButton';

export const OrderModal = ({orderModal, setOrderModal}) => {
  const cart = useSelector(state => state.cart.cart);
  const address = [
    {
      url: require('../assets/Group74.png'),
      name: ' Delivery at Home - Flat no: 301, SVR Enclave, Hyper Nagar,vasavi...',
      width: 10,
      height: 13,
    },
    {
      url: require('../assets/Group75.png'),
      name: 'Delivery in 20 Minutes',
      width: 11,
      height: 11,
    },
  ];

  const orderBreakDown = [
    {
      heading: 'Item Total',
      price: `₹279`,
    },
    {
      heading: 'Delivery Charge',
      price: `₹27`,
      textLine: true,
    },
    {
      heading: 'Taxes',
      price: `₹5.00`,
    },
    {
      heading: 'Donate ₹3.00 to feeding India Foundation ',
      price: `₹2.00`,
      textLine: true,
    },
  ];

  return (
    <Modal
      transparent={true}
      visible={orderModal}
      onRequestClose={() => setOrderModal(false)}>
      <View style={styles.orderContainer}>
        <View style={styles.subContainer}>
          <TouchableOpacity
            style={{
              position: 'absolute',
              top: -60,
              left: '45%',
            }}
            onPress={() => {
              setOrderModal(false);
            }}>
            <Image
              source={require('../assets/closeIcon.png')}
              style={{
                height: 33,
                width: 33,
                borderRadius: 50,
              }}
            />
          </TouchableOpacity>

          {address.map((add, index) => (
            <View
              key={index}
              style={{
                flexDirection: 'row',
                paddingHorizontal: '5%',
                alignItems: 'center',
              }}>
              <Image
                source={add.url}
                style={{width: add.width, height: add.height}}
              />
              <Text style={{color: 'black', marginHorizontal: 20}}>
                {add.name}
              </Text>
            </View>
          ))}

          <LineDivider width={0.5} />

          {/***************Offers section**********************/}

          <ScrollView style={{marginTop: 10}}>
            {/*****************CART ITEMS********************/}
            {cart.map((item, index) => (
              <>
                <View
                  key={index}
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    paddingHorizontal: 15,
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      marginVertical: 10,
                    }}>
                    <View>
                      <Image
                        source={require('../assets/VegIcon.png')}
                        style={{width: 14, height: 14, marginRight: 20}}
                      />
                    </View>

                    <View>
                      <Text
                        style={{
                          color: '#000',
                          fontSize: 16,
                          fontWeight: '400',
                        }}>
                        {item.name}
                      </Text>
                      <Text
                        style={{
                          color: '#000',
                          fontSize: 12,
                          fontWeight: '400',
                        }}>
                        ₹ {item.price}
                      </Text>
                      <Text
                        style={{
                          color: '#817070',
                          fontSize: 10,
                          fontWeight: '400',
                        }}>
                        Add on Mushroom
                      </Text>
                    </View>
                  </View>

                  <AddProductToCartButton
                    product={item}
                    index={index}
                    orderModal={true}
                    style={{
                      width: 100,
                      position: 'absolute',
                      top: 10,
                      right: 10,
                      borderRadius: 15,
                    }}
                  />
                </View>
              </>
            ))}
            <Text style={{textAlign: 'center'}}>
              Add Cooking Instruction (optional)
            </Text>
            <LineDivider width={2} />

            <Text
              style={{
                fontSize: 16,
                fontWeight: '600',
                color: 'black',
                paddingHorizontal: 10,
              }}>
              Offers
            </Text>
            <View style={{paddingHorizontal: 10}}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginVertical: 5,
                }}>
                <View style={{flexDirection: 'row'}}>
                  <Image
                    source={require('../assets/off.png')}
                    style={{height: 14, width: 14}}
                  />
                  <Text
                    style={{
                      color: '#000',
                      fontSize: 12,
                      fontWeight: '400',
                      marginHorizontal: 10,
                    }}>
                    Select a promo code
                  </Text>
                </View>
                <Text style={{color: 'red', fontSize: 12, fontWeight: '400'}}>
                  View Offers
                </Text>
              </View>

              <View>
                <Text style={{fontSize: 8, fontWeight: '400'}}>
                  Save ₹ 250 with code ZOMSAFETY
                </Text>
              </View>
            </View>

            <LineDivider width={2} />

            <TipCard />

            {/*******ORder Breakup summary***************/}

            <View
              style={{
                paddingHorizontal: 20,
                marginVertical: 20,
                backgroundColor: 'rgba(255, 244, 143, 0.14)',
                paddingVertical: 10,
              }}>
              {orderBreakDown.map((item, index) => (
                <View
                  key={index}
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text
                    style={{
                      color: item.heading.includes('Donate')
                        ? 'red'
                        : '#00000080',
                    }}>
                    {item.heading}
                  </Text>
                  <Text
                    style={{
                      color: item.heading.includes('Donate')
                        ? 'red'
                        : '#00000080',
                    }}>
                    {item.price}
                  </Text>
                </View>
              ))}
            </View>
            <LineDivider width={2} />

            <DeliveryInstructions />

            <PersonDetail />

            <OrderForSomeOneElse />

            <ClimateConciousDelivery />
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  orderContainer: {
    flex: 1,
    backgroundColor: '#00000090',
    justifyContent: 'flex-end',
  },
  subContainer: {
    flex: 0.9,
    paddingTop: 20,
    backgroundColor: '#fff',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
});
