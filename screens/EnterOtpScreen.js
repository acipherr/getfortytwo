import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const EnterOtpScreen = ({navigation}) => {
  const [text, setText] = useState('Resend OTP (in 20 sec)');

  useEffect(() => {
    setTimeout(() => {
      setText('Resend OTP');
    }, 10000);
  }, []);

  return (
    <View style={styles.container}>
      <View
        style={{
          height: '40%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative',
        }}>
        <Image
          source={require('./../assets/Fortytwo.png')}
          style={{height: 45, width: 185}}
        />
        <Text style={styles.dontPanicText}>Don’t Panic.</Text>
      </View>
      <View style={styles.subContainer}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            display: 'flex',
            flexDirection: 'row',
            paddingVertical: 32,
            paddingHorizontal: 32,
            alignItems: 'center',
          }}>
          <Image
            source={require('../assets/Vector.png')}
            style={{width: 16, height: 16, marginRight: 10}}
          />
          <Text
            style={{
              color: '#000',
              fontSize: 16,
              fontWeight: 400,
              fontFamily: 'Ubuntu',
            }}>
            Back
          </Text>
        </TouchableOpacity>
        <Text
          style={{
            color: 'black',
            fontSize: 14,
            fontFamily: 'Ubuntu',
            paddingHorizontal: 32,
          }}>
          enter OTP sent to your phone.
        </Text>
        <View style={styles.viewText}>
          <Text style={styles.number}>1234</Text>
        </View>
        <Text
          style={{
            fontFamily: 'Ubuntu',
            fontSize: 14,
            fontWeight: text != 'Resend OTP' ? 400 : 700,
            lineHeight: 16,
            textAlign: 'left',
            color: text != 'Resend OTP' ? '#ACACAC' : '#000000',
            marginTop: 100,
            marginBottom: 40,
            paddingHorizontal: 32,
            textDecorationLine: text != 'Resend OTP' ? 'none' : 'underline',
            textDecorationColor: '#000',
            textDecorationStyle: 'solid',
          }}>
          {text}
        </Text>
        <TouchableOpacity
          style={styles.continueButton}
          onPress={() => navigation.navigate('DetailScreen')}>
          <Text style={styles.continueText}>Continue</Text>
        </TouchableOpacity>
        <Text style={styles.privacytext}>
          by continuing, you agree to privacy policy and terms.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#462D85',
  },
  privacytext: {
    paddingHorizontal: 32,
    marginTop: 20,
    color: '#8D8D8D',
    fontSize: 10,
    fontWeight: '400',
    textAlign: 'center',
  },
  dontPanicText: {
    color: 'white',
    fontFamily: 'Ubuntu',
    fontSize: 10,
    fontWeight: '400',
    lineHeight: 11,
    textAlign: 'left',
    position: 'absolute',
    bottom: 20,
  },
  subContainer: {
    backgroundColor: 'white',
    height: '60%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  number: {
    fontFamily: 'Ubuntu',
    fontSize: 20,
    fontWeight: '500',
    lineHeight: 23,
    textAlign: 'left',
    color: 'black',
  },
  viewText: {
    borderWidth: 1,
    borderColor: '#757474',
    marginHorizontal: 32,
    marginVertical: 16,
    paddingVertical: 10,
    paddingHorizontal: 10,
    width: 300,
    borderRadius: 3,
  },
  continueButton: {
    backgroundColor: '#462D85',
    // marginTop: '45%',
    height: 52,
    width: 300,
    marginHorizontal: 32,
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
});

export default EnterOtpScreen;
