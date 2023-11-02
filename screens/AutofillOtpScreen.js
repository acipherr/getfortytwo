import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const AutofillOtpScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={{marginTop: '15%', alignItems: 'center'}}>
        <View style={{alignItems: 'flex-end', width: '96%', marginTop: '5%'}}>
          <TouchableOpacity
            onPress={() => navigation.navigate('HomeScreen')}
            style={{
              width: 67,
              height: 27,
              borderRadius: 15,
              backgroundColor: '#760C3780',
              justifyContent: 'center',
              position: 'absolute',
              top: -50,
              left: '30%',
            }}>
            <Text style={{color: 'white', textAlign: 'center', fontSize: 16}}>
              Skip
            </Text>
          </TouchableOpacity>
        </View>

        <Text style={{color: 'black', fontWeight: '400', fontSize: 16}}>
          We have sent a verification code to
        </Text>
        <Text style={{color: 'black', fontWeight: '400', fontSize: 16}}>
          +91-9010858965
        </Text>
        <View
          style={{
            flexDirection: 'row',
            minWidth: '55%',
            maxWidth: '70%',
            justifyContent: 'space-between',
            marginTop: 10,
          }}>
          {[1, 2, 3, 4, 5, 6].map((_, index) => (
            <TouchableOpacity
              onPress={() => navigation.navigate('HomeScreen')}
              key={index}
              style={{
                width: 30,
                height: 35,
                borderWidth: 1,
                borderColor: '#C4C4C4',
                borderRadius: 5,
              }}></TouchableOpacity>
          ))}
        </View>
        <View
          style={{
            height: '87%',
            width: '90%',
            justifyContent: 'flex-end',
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: 'black',
              fontWeight: '400',
              fontSize: 16,
              marginBottom: 20,
            }}>
            0:19
          </Text>
          <View style={{flexDirection: 'row'}}>
            <Text
              style={{
                color: 'black',
                fontWeight: '400',
                fontSize: 16,
                marginHorizontal: 15,
                marginBottom: 5,
              }}>
              Didn’t receive the code?
            </Text>
            <Text style={{color: '#C4C4C4', fontWeight: '400', fontSize: 16}}>
              Resend now
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // marginTop: '15%',
    width: '100%',
    //    borderWidth:1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
});

export default AutofillOtpScreen;
