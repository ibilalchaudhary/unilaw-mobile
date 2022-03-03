import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
  Image,
} from 'react-native';
import React from 'react';
import InputBox from '../component/InputBox';

export default function ForgotPassword({navigation}) {
  return (
    <ImageBackground
      source={require('../assets/login_bg.png')}
      style={{
        width: '100%',
        height: Dimensions.get('window').height,
        alignItems: 'center',
      }}>
      <Image
        source={require('../assets/logoLight.png')}
        style={{marginTop: 40}}
      />
      <View style={{width: '100%', padding: 20}}>
        <Text
          style={{
            fontSize: 30,
            fontWeight: 'bold',
            color: '#FFB579',
            marginBottom: 15,
            alignSelf: 'center',
            marginTop: 40,
          }}>
          Forgot Password
        </Text>
        <InputBox placeholder="Email" />

        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Verification');
          }}
          style={{
            backgroundColor: '#FFB579',
            padding: 13,
            width: '60%',
            borderRadius: 50,
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'center',
            marginTop: 30,
          }}>
          <Text style={{color: '#000000'}}>Send</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}
