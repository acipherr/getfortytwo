import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';

const SignInScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#CD1F34', '#D9185B']}
        style={{
          flex: 1,
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}>
        <View style={{alignItems: 'flex-end', width: '96%', marginTop: '5%'}}>
          <TouchableOpacity
            onPress={() => navigation.navigate('AutoFillOtpScreen')}
            style={{
              width: 67,
              height: 27,
              borderRadius: 15,
              backgroundColor: '#760C37',
              justifyContent: 'center',
            }}>
            <Text style={{color: 'white', textAlign: 'center', fontSize: 16}}>
              Skip
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.numberCont}>
          <Text style={{color: 'black', fontSize: 27, fontWeight: '400'}}>
            +91 9010858965
          </Text>
        </View>
        <View style={styles.sentOtp}>
          <Text style={{color: 'white', fontSize: 22, fontWeight: '400'}}>
            Send OTP
          </Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginVertical: '10%',
            justifyContent: 'space-between',
            width: '90%',
            alignSelf: 'center',
          }}>
          <View style={{borderTopWidth: 1, borderColor: 'white', flex: 0.4}} />
          <Text style={{color: 'white', textAlign: 'center', flex: 0.2}}>
            OR
          </Text>
          <View style={{borderTopWidth: 1, borderColor: 'white', flex: 0.4}} />
        </View>
        <View style={styles.continueEmail}>
          <Image
            source={require('../assets/Emailicon.png')}
            style={{width: 37, height: 27, marginLeft: 15}}
          />
          <Text
            style={{
              color: 'black',
              fontSize: 19,
              fontWeight: '400',
              marginRight: '12%',
            }}>
            Continue with Email
          </Text>
        </View>

        <View style={styles.SocialIconCon}>
          <View style={[styles.googleButton, {marginHorizontal: '2%'}]}>
            <Image
              source={require('../assets/facebookicon.png')}
              style={{width: 29, height: 29, marginLeft: 15}}
            />
            <Text
              style={{
                color: 'black',
                fontSize: 19,
                fontWeight: '400',
                marginRight: '12%',
              }}>
              Facebook
            </Text>
          </View>
          <View style={[styles.googleButton, {marginHorizontal: '2%'}]}>
            <Image
              source={require('../assets/google.png')}
              style={{width: 29, height: 29, marginLeft: 15}}
            />
            <Text
              style={{
                color: 'black',
                fontSize: 19,
                fontWeight: '400',
                marginRight: '12%',
              }}>
              Google
            </Text>
          </View>
        </View>
        <Text
          style={{
            color: 'white',
            fontSize: 14,
            fontWeight: '400',
            marginTop: '5%',
          }}>
          By continuing, you agree to our
        </Text>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.privacyText}>Terms of Service</Text>
          <Text style={[styles.privacyText, {marginHorizontal: 5}]}>
            Privacy Policy
          </Text>
          <Text style={styles.privacyText}>Content Policy</Text>
        </View>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  sentOtp: {
    backgroundColor: 'black',
    width: '85%',
    borderRadius: 10,
    paddingVertical: 12,
    alignItems: 'center',
  },
  numberCont: {
    backgroundColor: 'white',
    width: '85%',
    borderRadius: 10,
    paddingVertical: 8,
    alignItems: 'center',
    marginTop: '70%',
    marginBottom: '10%',
  },
  privacyText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '400',
    textDecorationLine: 'underline',
  },
  SocialIconCon: {
    flexDirection: 'row',
    marginVertical: 10,
    width: '100%',
    justifyContent: 'center',
  },
  googleButton: {
    backgroundColor: 'white',
    width: '40%',
    borderRadius: 10,
    paddingVertical: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  continueEmail: {
    backgroundColor: 'white',
    width: '85%',
    borderRadius: 10,
    paddingVertical: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: '5%',
  },
});

export default SignInScreen;
