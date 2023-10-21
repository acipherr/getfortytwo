import React, {useState} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import SingleFoodItem from './SingleFoodItem';
import {useNavigation} from '@react-navigation/native';

const RestaurantCard = ({restaurant}) => {
  const navigation = useNavigation();

  return (
    <>
      <View style={{marginBottom: '8%'}}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('RestaurantPage');
          }}
          style={styles.Cardcontainer}>
          <View style={styles.imageContainer}>
            <Image source={restaurant.url} style={styles.imageStyle} />
          </View>
          <View style={{backgroundColor: 'white'}}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 10,
                marginHorizontal: 15,
              }}>
              <View>
                <Text
                  style={{
                    color: 'black',
                    fontSize: 15,
                    fontWeight: '400',
                    fontFamily: 'Segoe UI',
                  }}>
                  {restaurant.name}
                </Text>
                <Text
                  style={{
                    color: '#3C3636',
                    fontSize: 10,
                    fontWeight: '400',
                    fontFamily: 'Segoe UI',
                  }}>
                  {restaurant.subHeading}
                </Text>
              </View>
              <View>
                <View style={styles.ratingContainer}>
                  <Text
                    style={{
                      color: '#fff',
                      fontSize: 10,
                      fontWeight: '400',
                      textAlign: 'center',
                    }}>
                    4.1
                  </Text>
                  <Image
                    source={require('../assets/Star.png')}
                    style={{width: 8, height: 8}}
                  />
                </View>
                <View>
                  <Text
                    style={{
                      color: '#3C3636',
                      fontSize: 10,
                      fontWeight: '400',
                      textAlign: 'center',
                    }}>
                    ₹100 for one
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View
            style={{
              marginTop: 10,
              flexDirection: 'row',
              justifyContent: 'space-between',
              backgroundColor: 'white',
              paddingHorizontal: 5,
            }}>
            <View>
              <Image
                source={require('../assets/GreenLeaf.png')}
                style={{width: 22, height: 22}}
              />
            </View>
            <View>
              <Text
                style={{
                  color: '#3C3636',
                  fontSize: 10,
                  fontWeight: '400',
                  textAlign: 'center',
                }}>
                Zomato funds environmental projects to offset
              </Text>
              <Text style={{color: '#3C3636', fontSize: 10, fontWeight: '400'}}>
                offset delivery carbon footprint
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Image
                source={require('../assets/Arrow.png')}
                style={{width: 18, height: 18, marginRight: 8}}
              />
              <View style={{borderRadius: 2, overflow: 'hidden'}}>
                <View
                  style={{
                    backgroundColor: '#EED925',
                    borderWidth: 1,
                    borderColor: '#2B7D0E',
                  }}>
                  <Text
                    style={{color: 'black', fontSize: 7, fontWeight: '400'}}>
                    MAX SAFETY
                  </Text>
                </View>
                <View style={{backgroundColor: '#2B7D0E'}}>
                  <Text
                    style={{
                      color: '#fff',
                      fontSize: 7,
                      fontWeight: '400',
                      textAlign: 'center',
                    }}>
                    DELIVERY
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  Cardcontainer: {
    borderRadius: 10,
    backgroundColor: 'white',
    overflow: 'hidden',
    marginHorizontal: '3%',

    paddingBottom: 20,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.2,
    shadowRadius: 9.62,
    elevation: 5,
  },
  imageContainer: {
    width: '100%',
  },
  imageStyle: {
    width: '100%',
    height: 200,
  },
  ratingContainer: {
    backgroundColor: '#2B7D0E',
    width: 56,
    height: 21,
    borderRadius: 5,
    justifyContent: 'space-around',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
});

export default RestaurantCard;
