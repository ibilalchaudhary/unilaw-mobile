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

export default function Verification() {
  return (
    <ScrollView style={{flex: 1}}>
      <ImageBackground
        source={require('../assets/light_bg.png')}
        style={{
          width: '100%',
          height: Dimensions.get('window').height,
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
        }}>
        <Image
          source={require('../assets/logoDark.png')}
          style={{position: 'absolute', top: 80, width: 110, height: 130}}
        />
        <View style={{width: '100%', padding: 20}}>
          <Text
            style={{
              fontSize: 24,
              fontWeight: 'bold',
              color: '#283244',
              marginBottom: 15,
            }}>
            Enter 4 Digits OTP
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
                navigation.navigate('SignUp');
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
              navigation.navigate('SignUp3');
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
    </ScrollView>
  );
}
