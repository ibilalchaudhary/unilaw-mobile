import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
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
        justifyContent: 'center',
        position: 'relative',
      }}>
      <Image
        source={require('../assets/logoLight.png')}
        style={{position: 'absolute', top: 80, width: 110, height: 130}}
      />
      <View style={{width: '100%', padding: 20}}>
        <Text
          style={{
            fontSize: 30,
            fontWeight: 'bold',
            color: '#FFB579',
            marginBottom: 15,
            alignSelf: 'center',
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
