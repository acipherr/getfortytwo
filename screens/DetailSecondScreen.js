import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  ScrollView,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const DetailSecondScreen = ({navigation}) => {
  const [textName, setTextName] = useState('Akhiles');
  const [email, setEmail] = useState('');
  const [referCode, setReferCode] = useState('');

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
      <ScrollView style={styles.subContainer}>
        <Text
          style={{
            color: '#000',
            fontSize: 16,
            fontWeight: 400,
            fontFamily: 'Ubuntu',
            paddingVertical: 32,
            paddingHorizontal: 32,
          }}>
          let’s get to know you.
        </Text>
        <Text
          style={{
            color: 'black',
            fontSize: 14,
            fontFamily: 'Ubuntu',
            fontWeight: '400',
            paddingHorizontal: 32,
          }}>
          your full name
        </Text>
        <View style={styles.viewText}>
          <TextInput
            onChangeText={text => setTextName(text)}
            value={textName}
            placeholder=" placeholder"
            keyboardType="default"
          />
        </View>
        <Text
          style={{
            color: 'black',
            fontSize: 14,
            fontFamily: 'Ubuntu',
            fontWeight: '400',
            paddingHorizontal: 32,
          }}>
          your email
        </Text>
        <View style={styles.viewText}>
          <TextInput
            onChangeText={text => setEmail(text)}
            value={email}
            placeholder=" email"
            keyboardType="default"
          />
        </View>
        <Text
          style={{
            color: 'black',
            fontSize: 14,
            fontFamily: 'Ubuntu',
            fontWeight: '400',
            paddingHorizontal: 32,
          }}>
          referral code (optional)
        </Text>
        <View style={styles.viewText}>
          <TextInput
            onChangeText={text => setReferCode(text)}
            value={referCode}
            placeholder=" Optional"
            keyboardType="default"
          />
        </View>
        <Text
          style={{
            fontFamily: 'Ubuntu',
            fontSize: 14,
            fontWeight: 400,
            lineHeight: 16,
            textAlign: 'left',
            marginHorizontal: 32,
            marginBottom: 40,
            marginTop: 20,
          }}>
          🥳 Akhilesh Khajuria has invited you. You are eligible for ₹150
          discount
        </Text>
        <TouchableOpacity
          style={styles.continueButton}
          onPress={() => navigation.navigate('PaymentScreen')}>
          <Text style={styles.continueText}>Finish</Text>
        </TouchableOpacity>
        <Text style={styles.privacytext}>
          by continuing, you agree to privacy policy and terms.
        </Text>
      </ScrollView>
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
    marginVertical: 10,
    paddingHorizontal: 10,
    width: 300,
    borderRadius: 3,
    height: 45,
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

export default DetailSecondScreen;
