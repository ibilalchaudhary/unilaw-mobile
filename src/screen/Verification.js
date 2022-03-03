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
import InputVerfication from '../component/InputVerfication';

export default function Verification({navigation}) {
  return (
    <ImageBackground
      source={require('../assets/light_bg.png')}
      style={{
        width: '100%',
        height: Dimensions.get('window').height,
        alignItems: 'center',
      }}>
      <Image
        source={require('../assets/logoDark.png')}
        style={{marginTop: 40}}
      />
      <View style={{width: '100%', padding: 20}}>
        <Text
          style={{
            fontSize: 24,
            fontWeight: 'bold',
            color: '#283244',
            marginBottom: 15,
            alignSelf: 'center',
            marginTop: 40,
          }}>
          Enter 4 Digits OTP
        </Text>
        <Text
          style={{
            fontSize: 14,
            color: '#FFB579',
            marginBottom: 15,
            alignSelf: 'center',
            textAlign: 'center',
          }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry
        </Text>
        <InputVerfication />
        <View
          style={{
            flexDirection: 'row',
            marginTop: 30,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Verification');
            }}
            style={{marginRight: 5}}>
            <Text
              style={{
                color: '#838488',
                textDecorationColor: '#838488',
                textDecorationLine: 'underline',
              }}>
              Resend OTP
            </Text>
          </TouchableOpacity>
          <Text
            style={{
              color: '#181D3D',
            }}>
            2:00
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('ForgotPasswordInputs');
          }}
          style={{
            backgroundColor: '#181D3D',
            padding: 13,
            width: '60%',
            borderRadius: 50,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 50,
            alignSelf: 'center',
          }}>
          <Text style={{color: '#ffffff'}}>Next</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}
