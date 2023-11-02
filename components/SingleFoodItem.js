import React from 'react';
import {
  View,
  Modal,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
// import {TouchableOpacity} from 'react-native-gesture-handler';

const SingleFoodItem = ({foodModal, setFoodModal, food}) => {
  return (
    <Modal
      visible={foodModal}
      transparent={true}
      onRequestClose={() => setFoodModal(!foodModal)}>
      <View style={styles.container}>
        <View style={styles.subContainer}>
          <TouchableOpacity
            style={{
              position: 'absolute',
              top: -40,
              left: '50%',
            }}
            onPress={() => {
              setFoodModal(false);
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
          <Image
            source={food.url}
            style={{height: 256, width: 390, borderRadius: 30}}
          />
          <View>
            <Text
              style={{
                color: 'black',
                fontSize: 16,
                fontWeight: '400',
                paddingHorizontal: 10,
              }}>
              {food.name}{' '}
            </Text>
            <View
              style={{
                flexDirection: 'row',
                marginVertical: 10,
                paddingHorizontal: 10,
              }}>
              <Image
                source={require('../assets/rating.png')}
                style={{width: 111, height: 16}}
              />
              <View style={styles.ratingContainer}>
                <Text
                  style={{
                    color: '#E41515',
                    fontSize: 8,
                    fontWeight: '400',
                    textAlign: 'center',
                  }}>
                  Best Seller
                </Text>
              </View>
            </View>
            <Text
              numberOfLines={2}
              style={{
                color: '#817070',
                fontSize: 11,
                fontWeight: '400',
                width: 190,
                paddingHorizontal: 10,
              }}>
              [Veg preparation] Spring mix, plant based, organic...
            </Text>
            <View
              style={{
                marginTop: '5%',
                height: 1,
                backgroundColor: ' #E5E5E5',
                borderColor: '#E5E5E5',
                borderWidth: 1,
              }}></View>
          </View>
          <View style={{marginTop: 20, paddingHorizontal: 10}}>
            <Text style={{color: '#000', fontSize: 14, fontWeight: '400'}}>
              Add On
            </Text>
            <Text style={{color: '#817070', fontSize: 11, fontWeight: '400'}}>
              You can choose up to 4 options
            </Text>
          </View>

          {[1, 2, 3, 4, 5, 6].map((_, index) => (
            <View
              key={index}
              style={{
                padding: 10,
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <View style={{flexDirection: 'row'}}>
                <View
                  style={{
                    borderColor: '#72CB53',
                    borderWidth: 0.5,
                    width: 14,
                    height: 14,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <View
                    style={{
                      borderColor: '#72CB53',
                      borderRadius: 50,
                      backgroundColor: '#72CB53',
                      height: 7,
                      width: 7,
                    }}></View>
                </View>
                <Text
                  style={{
                    color: '#817070',
                    fontSize: 10,
                    fontWeight: '400',
                    marginHorizontal: 15,
                  }}>
                  Pesto Paneer
                </Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Text
                  style={{color: '#817070', fontSize: 10, fontWeight: '400'}}>
                  ₹40
                </Text>
                <View
                  style={{
                    borderColor: '#817070',
                    borderWidth: 0.5,
                    width: 14,
                    height: 14,
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginHorizontal: 15,
                  }}
                />
              </View>
            </View>
          ))}

          <Text
            style={{
              color: 'black',
              fontSize: 14,
              fontWeight: '400',
              paddingHorizontal: 10,
            }}>
            Choose Your Protien
          </Text>

          <Text
            style={{
              color: '#817070',
              fontSize: 10,
              fontWeight: '400',
              paddingHorizontal: 10,
            }}>
            You can choose up to 3 options
          </Text>

          <View
            style={{
              paddingHorizontal: 10,
              marginTop: 5,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View
              style={{
                borderWidth: 0.5,
                borderColor: '#F60F0F',
                backgroundColor: '#F60F0F40',
                width: 87,
                height: 40,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  color: '#F60F0F',
                  marginHorizontal: '10%',
                  fontSize: 16,
                  fontWeight: '600',
                }}>
                -
              </Text>
              <Text style={{color: '#000', marginHorizontal: '20%'}}>1</Text>
              <Text
                style={{
                  color: '#F60F0F',
                  marginHorizontal: '10%',
                  fontSize: 16,
                  fontWeight: '600',
                }}>
                +
              </Text>
            </View>

            <TouchableOpacity
              style={{
                backgroundColor: '#CB202D',
                width: 270,
                height: 40,
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  color: '#fff',
                  fontSize: 20,
                  fontWeight: '600',
                  textAlign: 'center',
                }}>
                Add ₹199
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#00000090',
    flex: 1,
    justifyContent: 'flex-end',
    overflow: 'hidden',
  },
  subContainer: {
    backgroundColor: '#fff',
    flex: 0.9,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
  ratingContainer: {
    borderColor: '#E41515',
    borderRadius: 5,
    backgroundColor: '#E4151560',
    width: 70,
    height: 16,
    justifyContent: 'center',
    marginHorizontal: 20,
    borderWidth: 0.5,
  },
});

export default SingleFoodItem;
