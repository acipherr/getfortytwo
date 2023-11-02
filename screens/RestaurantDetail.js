import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  Switch,
  ScrollView,
  TextInput,
} from 'react-native';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';
import {CartStrip} from '../components/CartStrip';
import {useSelector, useDispatch} from 'react-redux';
import SingleFoodItem from '../components/SingleFoodItem';
import {AddProductToCartButton} from '../components/AddProductToCartButton';

const RestaurantDetail = () => {
  const cart = useSelector(state => state.cart.cart);

  const [value, setValue] = useState('DELIVERY');
  const [menu, setMenu] = useState('Full');
  const [isEnabled, setIsEnabled] = useState(false);
  const [isEnabled1, setIsEnabled1] = useState(false);
  const [text, onChangeText] = React.useState('Useless Text');
  const [number, onChangeNumber] = React.useState('');
  const [foodModal, setFoodModal] = useState(false);
  const [food, setFood] = useState({});

  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const toggleSwitch1 = () => setIsEnabled1(previousState => !previousState);

  const realTime = [
    {
      name: 'MODE',
      subHeading: 'delivery',
      url: require('../assets/Bikeicon.png'),
    },
    {
      name: 'TIME',
      subHeading: '40 mins',
      url: require('../assets/timer.png'),
    },
    {
      name: 'OFFERS',
      subHeading: 'view all (3)',
      url: require('../assets/offer.png'),
    },
  ];

  const foodItems = [
    {
      id: '1',
      name: 'Plant Protien Bowl',
      price: 220,
      url: require('../assets/vegsalad.png'),
    },
    {
      id: '2',
      name: 'Spring Veg Plater',
      price: 320,
      url: require('../assets/spring.png'),
    },
    {
      id: '3',
      name: 'Burger Veg',
      price: 220,
      url: require('../assets/burger.png'),
    },
    {
      id: '4',
      name: 'Noodles veg',
      price: 320,
      url: require('../assets/fastFood.png'),
    },
    {
      id: '5',
      name: 'Sweets',
      price: 220,
      url: require('../assets/mithai.png'),
    },
    {
      id: '6',
      name: 'shakes',
      price: 320,
      url: require('../assets/shake.png'),
    },
  ];

  const HeaderOfList = () => {
    return (
      <ScrollView style={styles.container}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingLeft: 10,
          }}>
          <View>
            <Text style={{color: 'black', fontWeight: '400', fontSize: 26}}>
              Eat Healthy
            </Text>
            <Text style={{color: '#3C3636', fontWeight: '400', fontSize: 12}}>
              Healthy food, South Indian
            </Text>
            <Text style={{color: '#8C7B7B', fontWeight: '400', fontSize: 10}}>
              Kukatpally, Hyderabad
            </Text>
          </View>

          <View style={{}}>
            <View
              style={{
                width: 86,
                height: 42,
                backgroundColor: '#4AB425',
                alignItems: 'center',
                justifyContent: 'center',
                borderBottomLeftRadius: 4,
                borderTopLeftRadius: 4,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Text style={{color: 'white', fontSize: 12, fontWeight: '400'}}>
                  4.2
                </Text>
                <Image
                  source={require('../assets/Star.png')}
                  style={{height: 11, width: 11, marginHorizontal: 7}}
                />
              </View>
              <Text style={{color: 'white', fontSize: 12, fontWeight: '400'}}>
                Delivery
              </Text>
            </View>

            <View style={{marginTop: 10}}>
              <ImageBackground
                source={require('../assets/foodPlate.png')}
                style={{
                  height: 42,
                  width: 86,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderTopLeftRadius: 4,
                  borderBottomLeftRadius: 4,
                }}>
                <View
                  style={{
                    backgroundColor: '#00000090',
                    height: 42,
                    width: 86,
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    borderTopLeftRadius: 4,
                    borderBottomLeftRadius: 4,
                  }}
                />
                <Text style={{color: 'white', fontWeight: '400', fontSize: 12}}>
                  6
                </Text>
                <Text style={{color: 'white', fontWeight: '400', fontSize: 12}}>
                  PHOTOS
                </Text>
              </ImageBackground>
            </View>
          </View>
        </View>

        <View
          style={{
            borderRadius: 2,
            overflow: 'hidden',
            width: '22%',
            paddingHorizontal: 10,
            marginTop: -10,
          }}>
          <View
            style={{
              backgroundColor: '#EED925',
              borderWidth: 1,
              borderColor: '#2B7D0E',
              alignItems: 'center',
            }}>
            <Text style={{color: 'black', fontSize: 7, fontWeight: '400'}}>
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

        {/************CHANGE STATUS TOGGLER****************/}
        <View
          style={{
            marginTop: '8%',
            backgroundColor: '#F0EBEB',
            marginHorizontal: 20,
            flexDirection: 'row',
            justifyContent: 'space-between',
            borderRadius: 4,
          }}>
          <TouchableOpacity
            onPress={() => {
              setValue('DELIVERY');
            }}
            style={{
              width: 112,
              height: 37,
              backgroundColor: value == 'DELIVERY' ? '#000' : 'transparent',
              borderRadius: 4,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                fontSize: 13,
                fontWeight: 400,
                color: value == 'DELIVERY' ? '#fff' : '#8C7B7B',
              }}>
              DELIVERY
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setValue('DINNING');
            }}
            style={{
              width: 112,
              height: 37,
              backgroundColor: value == 'DINNING' ? '#000' : 'transparent',

              borderRadius: 4,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                fontSize: 13,
                fontWeight: 400,
                color: value == 'DINNING' ? '#fff' : '#8C7B7B',
              }}>
              DINNING
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setValue('REVIEWS');
            }}
            style={{
              width: 112,
              height: 37,
              backgroundColor: value == 'REVIEWS' ? '#000' : 'transparent',
              borderRadius: 4,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                fontSize: 13,
                fontWeight: 400,
                color: value == 'REVIEWS' ? '#fff' : '#8C7B7B',
              }}>
              REVIEWS
            </Text>
          </TouchableOpacity>
        </View>

        {/*********DELIVERY STATUS VIEW*************/}

        <View
          style={{
            padding: 20,
            flexDirection: 'row',
            justifyContent: 'space-around',
          }}>
          {realTime.map((item, index) => (
            <View key={index} style={{flexDirection: 'row'}}>
              <Image source={item.url} style={{height: 22, width: 22}} />
              <View style={{marginHorizontal: 10}}>
                <Text
                  style={{color: '#8C7B7B', fontSize: 9, fontWeight: '400'}}>
                  {item.name}
                </Text>
                <Text style={{color: '#000', fontSize: 9, fontWeight: '400'}}>
                  {item.subHeading}
                </Text>
              </View>
            </View>
          ))}
        </View>

        <View
          style={{
            backgroundColor: '#F0EBEB',
            marginHorizontal: 20,
            flexDirection: 'row',
            alignItems: 'center',
            borderRadius: 4,
            height: 40,
          }}>
          <Image
            source={require('../assets/motorcycle.png')}
            style={{height: 26, width: 40, backgroundColor: '#F0EBEB'}}
          />
          <Text
            style={{
              fontSize: 14,
              fontWeight: '500',
              color: '#000',
              marginHorizontal: 20,
            }}>
            ₹25 distance charge
          </Text>
        </View>

        {/**************MENU LISTS*****************/}
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: '#F0EBEB',
            marginVertical: 20,
            alignItems: 'center',
          }}>
          <TouchableOpacity
            onPress={() => setMenu('Full')}
            style={{
              borderBottomWidth: menu == 'Full' ? 1 : 0,
              borderBottomColor: menu == 'Full' ? '#C00808' : '#F0EBEB',
              marginHorizontal: 30,
            }}>
            <Text
              style={{
                color: '#A4A0A0',
                fontSize: 17,
                fontWeight: '400',
                height: 50,
                paddingTop: 15,
              }}>
              Full Menu
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setMenu('Healthy')}
            style={{
              borderBottomWidth: menu == 'Healthy' ? 1 : 0,
              borderBottomColor: menu == 'Healthy' ? '#C00808' : '#F0EBEB',
            }}>
            <Text
              style={{
                color: '#A4A0A0',
                fontSize: 17,
                fontWeight: '400',
                height: 50,
                paddingTop: 15,
              }}>
              Healthy Menu
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.switchContainer}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Switch
              trackColor={{false: '#767577', true: '#81b0ff'}}
              thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
            <Text
              style={{
                color: '#3C3636',
                fontSize: 8,
                fontWeight: '400',
                marginHorizontal: 10,
              }}>
              Veg
            </Text>
          </View>

          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Switch
              trackColor={{false: '#767577', true: '#81b0ff'}}
              thumbColor={isEnabled1 ? '#f5dd4b' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch1}
              value={isEnabled1}
            />
            <Text
              style={{
                color: '#3C3636',
                fontSize: 8,
                fontWeight: '400',
                marginHorizontal: 10,
              }}>
              Egg
            </Text>
          </View>

          {/*******SEARCH BOX*************/}
          <View
            style={{
              borderColor: '#C4C4C4',
              borderRadius: 8,
              borderWidth: 1,
              flexDirection: 'row',
              alignItems: 'center',
              paddingHorizontal: 10,
              paddingVertical: 5,
              width: '35%',
            }}>
            <Image
              source={require('../assets/searchicon.png')}
              style={{height: 14, width: 16}}
            />

            <TextInput
              style={{
                marginHorizontal: 10,
                color: '#C4C4C4',
                fontSize: 16,
                fontWeight: '400',
              }}
              onChangeText={onChangeNumber}
              value={number}
              placeholder="Search"
            />
          </View>
        </View>

        {/***********MENU BUTTON*******************/}
        {/* <View style={{alignItems: 'flex-end', paddingHorizontal: 20}}>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            backgroundColor: '#000',
            width: '20%',
            borderRadius: 20,
            paddingHorizontal: 7,
            alignItems: 'center',
          }}>
          <Image
            source={require('../assets/MenuIcon.png')}
            style={{height: 8, width: 11}}
          />
          <Text style={{color: '#fff', fontSize: 14, fontWeight: '600'}}>
            Menu
          </Text>
        </TouchableOpacity>
      </View> */}

        <View style={{paddingHorizontal: 10, marginTop: 10}}>
          <Text style={{color: 'black', fontSize: 12, fontWeight: '400'}}>
            Recommended
          </Text>
        </View>
      </ScrollView>
    );
  };

  return (
    <>
      {/*************FOOD ITEM MODAL*************/}

      <SingleFoodItem
        foodModal={foodModal}
        setFoodModal={setFoodModal}
        food={food}
      />

      {/**********FOOD ITEMS************/}

      <FlatList
        ListHeaderComponent={<HeaderOfList />}
        ListFooterComponent={
          <View style={styles.listFooterConataier}>
            <View
              style={{
                backgroundColor: '#1A30F3',
                borderRadius: 5,
                padding: 5,
              }}>
              <Text style={{color: '#fff', fontSize: 13, fontWeight: '700'}}>
                30% OFF up to ₹75
              </Text>
            </View>
            <View style={{alignItems: 'center'}}>
              <Text
                style={{
                  color: '#000',
                  fontSize: 10,
                  fontWeight: '400',
                  width: '75%',
                }}>
                Use code ZOMSAFETY on orders with items worth ₹159 or more
              </Text>
            </View>
          </View>
        }
        data={foodItems}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item, index}) => (
          <View key={index} style={styles.singleItemContainer}>
            <View>
              <View style={styles.itemDesc}>
                <View
                  style={{
                    borderColor: '#72CB53',
                    borderRadius: 50,
                    backgroundColor: '#72CB53',
                    height: 7,
                    width: 7,
                  }}
                />
              </View>
              <TouchableOpacity
                onPress={() => {
                  setFoodModal(true);
                  setFood(item);
                }}>
                <Text style={{color: '#000', fontWeight: '400', fontSize: 14}}>
                  {item.name}
                </Text>
              </TouchableOpacity>
              <Text style={{color: '#3C3636', fontWeight: '400', fontSize: 10}}>
                ₹ {item.price}
              </Text>

              <View style={{flexDirection: 'row', marginVertical: 2}}>
                <Image
                  source={require('../assets/rating.png')}
                  style={{height: 12, width: 83}}
                />
                <View style={styles.mustTry}>
                  <Text
                    style={{
                      color: '#E41515',
                      fontWeight: '400',
                      fontSize: 8,
                    }}>
                    Must Try
                  </Text>
                </View>
              </View>
              <Text
                style={{
                  color: '#817070',
                  fontSize: 10,
                  fontWeight: '400',
                  width: '80%',
                }}>
                [Veg preparation] Spring mix, plant based, organic...
              </Text>
            </View>

            <Image
              source={item.url}
              style={{
                width: 130,
                height: 96,
                borderRadius: 15,
              }}
            />
            <AddProductToCartButton
              product={item}
              index={index}
              style={{
                width: 100,
                position: 'absolute',
                top: 70,
                right: 12,
                borderRadius: 15,
              }}
            />
          </View>
        )}
      />
      {cart.length > 0 && <CartStrip />}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: '8%',
    backgroundColor: '#fff',
  },
  switchContainer: {
    flexDirection: 'row',
    height: 60,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  itemDesc: {
    borderColor: '#72CB53',
    borderWidth: 0.5,
    width: 14,
    height: 14,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 5,
  },
  listFooterConataier: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    paddingVertical: 10,
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  singleItemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingTop: 20,
    paddingHorizontal: 10,
    paddingRight: 10,
    backgroundColor: '#fff',
  },
  mustTry: {
    borderColor: '#E41515',
    borderRadius: 10,
    borderWidth: 1,
    backgroundColor: '#E4151550',
    paddingHorizontal: 5,
    marginHorizontal: 10,
  },
});

export default RestaurantDetail;
