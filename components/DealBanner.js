import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {LinearGradient} from 'react-native-linear-gradient';

const DealBanner = () => {
  return (
    <View style={styles.container}>
      <View style={{width: 167, height: 122, borderRadius: 10}}>
        <LinearGradient
          colors={['rgba(255, 0, 0, 0.85)', 'rgba(255, 122, 0, 0.61)']}
          style={{
            flex: 1,
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 10,
          }}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}>
          <View>
            <Text style={{fontSize: 8, fontWeight: '400', color: 'white'}}>
              UP TO
            </Text>
            <Text style={{fontSize: 21, fontWeight: '700', color: 'white'}}>
              60% OFF
            </Text>
            <View
              style={{
                borderWidth: 0.6,
                borderColor: 'white',
                width: 27,
              }}></View>
            <Text style={{fontSize: 11, fontWeight: '400', color: 'white'}}>
              no cooking
            </Text>
            <Text style={{fontSize: 13, fontWeight: '400', color: 'white'}}>
              July
            </Text>
          </View>
          <View style={{justifyContent: 'flex-end', height: '100%'}}>
            <View style={{marginBottom: 10}}>
              <Image
                source={require('../assets/girl.png')}
                style={{width: 67, height: 65}}
              />
            </View>
          </View>
        </LinearGradient>
      </View>

      <View style={{width: 167, height: 122, borderRadius: 10}}>
        <LinearGradient
          colors={['rgba(3, 159, 246, 1)', 'rgba(39, 154, 237, 0.33)']}
          style={{
            flex: 1,
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 10,
          }}
          start={{x: 0, y: 1}}
          end={{x: 0, y: 0}}>
          <View>
            <Text style={{fontSize: 8, fontWeight: '400', color: 'white'}}>
              UP TO
            </Text>
            <Text style={{fontSize: 21, fontWeight: '700', color: 'white'}}>
              60% OFF
            </Text>
            <View
              style={{
                borderWidth: 0.6,
                borderColor: 'white',
                width: 27,
              }}></View>
            <Text style={{fontSize: 11, fontWeight: '400', color: 'white'}}>
              no cooking
            </Text>
            <Text style={{fontSize: 13, fontWeight: '400', color: 'white'}}>
              July
            </Text>
          </View>
          <View
            style={{justifyContent: 'flex-end', height: '100%', width: '23%'}}>
            <View>
              <Image
                source={require('../assets/Intersect.png')}
                style={{
                  width: 62,
                  height: 98,
                  borderWidth: 1,
                  borderBottomRightRadius: 10,
                }}
              />
            </View>
          </View>
        </LinearGradient>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: '10%',
    marginHorizontal: '2%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    // borderWidth: 1,
    width: '95%',
  },
});

export default DealBanner;
