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

export default function ForgotPasswordInputs({navigation}) {
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
            marginBottom: 25,
            alignSelf: 'center',
            marginTop: 40,
          }}>
          Change Password
        </Text>
        <InputBox
          isDark={true}
          placeholder="Enter New Password"
          secureTextEntry={true}
        />
        <InputBox
          isDark={true}
          placeholder="Re-Enter New Password"
          secureTextEntry={true}
        />
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('SignIn');
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
          <Text style={{color: '#ffffff'}}>Save</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}
