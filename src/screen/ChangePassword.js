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

export default function ChangePassword({navigation}) {
  return (
    <ImageBackground
      source={require('../assets/light_bg.png')}
      style={{
        width: '100%',
        height: Dimensions.get('window').height,
        alignItems: 'center',
        justifyContent: 'center',
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
            marginBottom: 25,
            alignSelf: 'center',
          }}>
          Change Password
        </Text>
        <InputBox
          isDark={true}
          placeholder="Enter Previous Password"
          secureTextEntry={true}
        />
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
            navigation.navigate('Profile');
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
