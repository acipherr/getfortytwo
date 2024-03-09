import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';

const SignInScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View
        style={{
          height: '35%',
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
        <Text
          style={{
            color: '#8F8F8F',
            fontSize: 14,
            fontFamily: 'Ubuntu',
            paddingVertical: 32,
            paddingHorizontal: 32,
          }}>
          FortyTwo parking solution.
        </Text>
        <Text
          style={{
            color: 'black',
            fontSize: 14,
            fontFamily: 'Ubuntu',
            paddingHorizontal: 32,
          }}>
          enter your phone
        </Text>
        <View style={styles.viewText}>
          <Text style={styles.number}>9796458808</Text>
        </View>
        <Text
          style={{
            fontFamily: 'Ubuntu',
            fontSize: 14,
            fontWeight: 400,
            lineHeight: 16,
            textAlign: 'left',
            marginHorizontal: 32,
          }}>
          If you have a referal code, you can apply later.
        </Text>
        <TouchableOpacity
          style={styles.continueButton}
          onPress={() => navigation.navigate('AutoFillOtpScreen')}>
          <Text style={styles.continueText}>Continue</Text>
        </TouchableOpacity>
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
    height: '65%',
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
    marginTop: '50%',
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

export default SignInScreen;
