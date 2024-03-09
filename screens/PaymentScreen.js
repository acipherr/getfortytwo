import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TextInput,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const PaymentScreen = ({navigation}) => {
  return (
    <ScrollView style={styles.container}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingVertical: 32,
        }}>
        <Image
          source={require('../assets/Group_3.png')}
          style={{width: 110, height: 26}}
        />
        <Image
          source={require('../assets/smile.png')}
          style={{width: 20, height: 20}}
        />
      </View>
      <View style={{paddingHorizontal: 24}}>
        <Image
          source={require('../assets/mask.png')}
          style={{width: 309, height: 100}}
        />
      </View>
      <Text style={[styles.textColor, {paddingTop: 24}]}>
        FortyTwo is in to{'  '}
        <Text style={{fontWeight: '700'}}>Sector 125, Noida.</Text>
      </Text>
      <Text style={styles.textColor}>
        limited parking spots available starting Apr 1.
      </Text>
      <View style={{alignItems: 'center'}}>
        <View
          style={{
            width: 90,
            borderColor: '#D9D9D9',
            borderWidth: 1,
            marginTop: 24,
          }}
        />
      </View>

      <Text style={[styles.textColor, {textAlign: 'justify', paddingTop: 24}]}>
        select drop off point
      </Text>

      <View style={styles.dropDownView}>
        <Text
          style={[styles.textColor, {textAlign: 'justify', fontWeight: 700}]}>
          Moglix, Smartworks, Sec-125 Noida.
        </Text>
        <Image
          source={require('../assets/downArrow.png')}
          style={{width: 10, height: 6}}
        />
      </View>
      <View style={styles.detail}>
        <View style={{display: 'flex', flexDirection: 'row', marginTop: 10}}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: 700,
              fontFamily: 'Ubuntu',
              color: 'black',
            }}>
            Valet Parking
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontWeight: 400,
              fontFamily: 'Ubuntu',
              color: 'black',
              marginHorizontal: 10,
            }}>
            (Mon-Sat, 8am - 8pm)
          </Text>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 24,
          }}>
          <Text
            style={{
              fontSize: 14,
              fontWeight: 400,
              fontFamily: 'Ubuntu',
              color: 'black',
            }}>
            Subscription Price (monthly)
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontWeight: 400,
              fontFamily: 'Ubuntu',
              color: 'black',
              marginHorizontal: 10,
              textDecorationLine: 'line-through',
              textDecorationColor: '#F88022',
              textDecorationStyle: 'solid',
            }}>
            ₹4200
          </Text>
        </View>

        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text
            style={{
              fontSize: 14,
              fontWeight: 400,
              fontFamily: 'Ubuntu',
              color: 'black',
            }}>
            Employer Discount (till 8 Mar)
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontWeight: 400,
              fontFamily: 'Ubuntu',
              color: '#0F9015',
              marginHorizontal: 10,
            }}>
            - ₹1200
          </Text>
        </View>

        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text
            style={{
              fontSize: 14,
              fontWeight: 400,
              fontFamily: 'Ubuntu',
              color: 'black',
            }}>
            Referral Discount
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontWeight: 400,
              fontFamily: 'Ubuntu',
              color: '#0F9015',
              marginHorizontal: 10,
            }}>
            - ₹150
          </Text>
        </View>

        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text
            style={{
              fontSize: 14,
              fontWeight: 400,
              fontFamily: 'Ubuntu',
              color: 'black',
            }}>
            Taxes (GST)
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontWeight: 400,
              fontFamily: 'Ubuntu',
              color: 'black',
              marginHorizontal: 10,
            }}>
            117.5
          </Text>
        </View>

        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            borderTopWidth: 1,
            borderColor: '#D9D9D9',
            marginTop: 24,
            paddingVertical: 10,
          }}>
          <Text
            style={{
              fontSize: 14,
              fontWeight: 700,
              fontFamily: 'Ubuntu',
              color: 'black',
            }}>
            Total
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontWeight: 700,
              fontFamily: 'Ubuntu',
              color: '#000',
              marginHorizontal: 10,
            }}>
            ₹3517.5
          </Text>
        </View>
      </View>
      <View style={{display: 'flex', flexDirection: 'row', marginTop: 8}}>
        <Text
          style={{
            color: 'black',
            fontFamily: 'Ubuntu',
            fontSize: 14,
            fontWeight: 400,
          }}>
          Coupon applied: Moglix{' '}
        </Text>
        <Text
          style={{
            color: 'black',
            fontFamily: 'Ubuntu',
            fontSize: 14,
            fontWeight: 700,
            textDecorationLine: 'underline',
            textDecorationColor: '#F88022',
            textDecorationStyle: 'solid',
          }}>
          Remove
        </Text>
      </View>
      <View>
        <Text
          style={{
            color: '#0F9015',
            fontFamily: 'Ubuntu',
            fontSize: 12,
            fontWeight: 400,
          }}>
          ₹1200 off for next 3 months.
        </Text>
      </View>
      <View style={{paddingHorizontal: 10}}>
        <TouchableOpacity style={styles.continueButton}>
          <Text style={styles.continueText}>Subscribe</Text>
        </TouchableOpacity>
        <Text style={styles.privacytext}>
          Subscription will be renewed at ₹3500+GST
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#fff',
    paddingHorizontal: 24,
  },
  privacytext: {
    marginTop: 5,
    color: '#000',
    fontSize: 12,
    fontWeight: '400',
    textAlign: 'center',
  },
  continueButton: {
    backgroundColor: '#462D85',
    marginTop: 20,
    height: 52,
    width: 300,
    display: 'flex',
    justifyContent: 'center',
  },
  continueText: {
    fontFamily: 'Ubuntu',
    fontSize: 20,
    fontWeight: '500',
    lineHeight: 23,
    textAlign: 'center',
    color: 'white',
  },
  textColor: {
    fontSize: 14,
    fontFamily: 'Ubuntu',
    fontWeight: '400',
    color: 'black',
    lineHeight: 16,
    textAlign: 'center',
  },
  dropDownView: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#757474',
    borderRadius: 3,
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 10,
  },
  detail: {
    borderWidth: 1,
    borderColor: '#D9D9D9',
    borderRadius: 5,
    marginTop: 32,
    paddingHorizontal: 16,
  },
});

export default PaymentScreen;
