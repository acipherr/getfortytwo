import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  FlatList,
} from 'react-native';
import SearchBar from '../components/SearchBar';
import DealBanner from '../components/DealBanner';
import RestaurantCard from '../components/RestaurantCard';

const HomeScreen = () => {
  const DishArr = [
    {
      name: 'Healthy',
      url: require('../assets/healthy.png'),
    },
    {
      name: 'Biryani',
      url: require('../assets/biryani.png'),
    },
    {
      name: 'Pizza',
      url: require('../assets/pizza.png'),
    },
    {
      name: 'Haleem',
      url: require('../assets/matka.png'),
    },
    {
      name: 'Chicken',
      url: require('../assets/chicken.png'),
    },
    {
      name: 'Burger',
      url: require('../assets/burger.png'),
    },
    {
      name: 'Cake',
      url: require('../assets/cake.png'),
    },
    {
      name: 'Shawarma',
      url: require('../assets/furit.png'),
    },
  ];

  const restaurants = [
    {
      name: 'Eat Healthy',
      subHeading: 'Healthy food',
      url: require('../assets/eatHealthy.png'),
    },
    {
      name: 'Amul',
      subHeading: 'Desserts, Ice Cream, Beverages',
      url: require('../assets/amul.png'),
    },
    {
      name: 'Tinku Fast Food Center',
      subHeading: 'Chinese, Italian',
      url: require('../assets/fastFood.png'),
    },
    {
      name: 'Hanuman Sweets',
      subHeading: 'Mithai, Beverages',
      url: require('../assets/mithai.png'),
    },
    {
      name: 'Snacks Corner',
      subHeading: 'Beverages',
      url: require('../assets/snacks.png'),
    },
    {
      name: 'Pallavi Biryani',
      subHeading: 'Biryani, North Indian, Chinese',
      url: require('../assets/pulao.png'),
    },
  ];

  const RenderTopComponents = () => {
    return (
      <ScrollView
        style={{
          width: '100%',
          backgroundColor: 'white',
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            width: '90%',
            marginHorizontal: 15,
            marginTop: '5%',
            backgroundColor: '#fff',
          }}>
          <View>
            <Image
              source={require('../assets/MenuIcon.png')}
              style={{height: 23, width: 28}}
            />
          </View>
          <View
            style={{
              borderWidth: 0.7,
              borderStyle: 'dashed',
              width: '70%',
              // marginTop: '5%',
            }}
          />
          <View>
            <Image
              source={require('../assets/location.png')}
              style={{height: 21, width: 15}}
            />
          </View>
        </View>

        {/*************SEARCH BAR COMPONENT********************/}
        <SearchBar />

        {/*******************SELECTION TAGS***************************/}

        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={{marginTop: 30, marginHorizontal: 20}}>
          <View style={styles.MaxSafetyTag}>
            <Text style={{color: 'black', fontSize: 12, fontWeight: '400'}}>
              MAX Safety
            </Text>
          </View>
          <View
            style={[
              styles.MaxSafetyTag,
              {flexDirection: 'row', justifyContent: 'space-evenly'},
            ]}>
            <Image
              source={require('../assets/proicon.png')}
              style={{width: 11, height: 13}}
            />
            <Text style={{color: 'black', fontSize: 12, fontWeight: '400'}}>
              PRO
            </Text>
          </View>
          <View
            style={[
              styles.MaxSafetyTag,
              {flexDirection: 'row', justifyContent: 'space-evenly'},
            ]}>
            <Text style={{color: 'black', fontSize: 12, fontWeight: '400'}}>
              Cuisines
            </Text>
            <Image
              source={require('../assets/Vector4.png')}
              style={{width: 6, height: 3}}
            />
          </View>
          <View style={styles.MaxSafetyTag}>
            <Text style={{color: 'black', fontSize: 12, fontWeight: '400'}}>
              Rating
            </Text>
          </View>
          <View
            style={[
              styles.MaxSafetyTag,
              {flexDirection: 'row', justifyContent: 'space-evenly'},
            ]}>
            <Image
              source={require('../assets/Group12.png')}
              style={{width: 10, height: 9}}
            />
            <Text style={{color: 'black', fontSize: 12, fontWeight: '400'}}>
              Popular
            </Text>
          </View>
        </ScrollView>

        {/********************DEAL VIEW***************************/}
        <DealBanner />

        {/*************EAT WHAT MAKES YOU HAPPY SECTION***************/}

        <View style={{marginHorizontal: 15}}>
          <Text style={{color: 'black', fontSize: 20, fontWeight: '600'}}>
            Eat what makes you happy
          </Text>

          <FlatList
            data={DishArr}
            numColumns={4}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item, index}) => (
              <View style={{marginTop: '10%', marginHorizontal: '2.75%'}}>
                <Image
                  source={item.url}
                  style={{height: 70, width: 70, borderRadius: 80}}
                />
                <Text
                  style={{
                    color: 'black',
                    marginTop: 10,
                    fontSize: 12,
                    fontWeight: '400',
                    textAlign: 'center',
                  }}>
                  {item.name}
                </Text>
              </View>
            )}
          />
          <View
            style={{
              borderWidth: 1,
              borderColor: '#C4C4C4',
              borderRadius: 10,
              padding: 10,
              marginTop: '10%',
            }}>
            <Text
              style={{
                color: 'black',
                fontSize: 9,
                fontWeight: '600',
                textAlign: 'center',
              }}>
              See more
            </Text>
          </View>
        </View>
        <Text
          style={{
            color: 'black',
            fontSize: 20,
            fontWeight: '600',
            marginVertical: '9%',
            paddingHorizontal: 10,
          }}>
          {' '}
          396 restaurants around you
        </Text>
      </ScrollView>
    );
  };

  return (
    <>
      {/*******************RESTAURANTS AROUND YOU***********************/}
      <>
        <FlatList
          ListHeaderComponent={<RenderTopComponents />}
          data={restaurants}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item, index}) => (
            <RestaurantCard restaurant={item} key={index} />
          )}
          showsVerticalScrollIndicator={true}
        />
      </>
    </>
  );
};

const styles = StyleSheet.create({
  MaxSafetyTag: {
    height: 29,
    width: 77,
    borderWidth: 1,
    borderColor: '#E5E5E5',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
});

export default HomeScreen;
